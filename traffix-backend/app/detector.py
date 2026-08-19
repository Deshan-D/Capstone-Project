import cv2
import time
from ultralytics import YOLO

# Load the trained YOLOv8 model weights
# YOLOv8 Nano (yolov8n.pt) is used as a lightweight default that will auto-download if missing
try:
    model = YOLO("yolov8n.pt")
except Exception as e:
    print(f"Failed to load model: {e}")
    model = YOLO("yolov8n.pt")

def generate_live_frames(camera_id=0):
    """
    Generator function that instantiates an OpenCV video capture stream,
    runs YOLOv8 tracking, and yields annotated JPEG frames.
    """
    # Instantiate the laptop camera or external webcam using the passed index
    # Note: Passing 0 automatically targets the built-in webcam
    cap = cv2.VideoCapture(int(camera_id))
    
    if not cap.isOpened():
        print(f"Error: Could not open physical camera at index {camera_id}.")
        return

    tracked_ids = set()
    counts = {"Passenger Cars": 0, "Trucks & Vans": 0, "Motorbikes": 0}

    try:
        while True:
            success, frame = cap.read()
            if not success:
                print("Warning: Failed to grab frame from camera. Stream may have disconnected.")
                break
                
            height, width = frame.shape[:2]
            line_y = int(height * 0.7)
            
            results = model.track(frame, persist=True, tracker="bytetrack.yaml")
            
            # Draw counting line
            cv2.line(frame, (0, line_y), (width, line_y), (0, 0, 255), 2)
            cv2.putText(frame, "Counting Line", (10, line_y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

            if results[0].boxes is not None and results[0].boxes.id is not None:
                boxes = results[0].boxes.xyxy.cpu().numpy()
                track_ids = results[0].boxes.id.int().cpu().tolist()
                clss = results[0].boxes.cls.int().cpu().tolist()

                for box, track_id, cls in zip(boxes, track_ids, clss):
                    x1, y1, x2, y2 = map(int, box)
                    cy = int((y1 + y2) / 2)

                    # Check if center y crosses the line
                    if cy > line_y and track_id not in tracked_ids:
                        tracked_ids.add(track_id)
                        if cls == 2:
                            counts["Passenger Cars"] += 1
                        elif cls in [5, 7]:
                            counts["Trucks & Vans"] += 1
                        elif cls == 3:
                            counts["Motorbikes"] += 1

                    # Draw bounding box
                    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
                    label = f"ID:{track_id} {model.names[cls]}"
                    cv2.putText(frame, label, (x1, max(0, y1 - 10)), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

            # Overlay counts
            cv2.putText(frame, f"Cars: {counts['Passenger Cars']}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
            cv2.putText(frame, f"Trucks: {counts['Trucks & Vans']}", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
            cv2.putText(frame, f"Bikes: {counts['Motorbikes']}", (10, 90), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
            
            # Encode the final image to a jpeg format memory buffer
            ret, buffer = cv2.imencode(".jpg", frame)
            if not ret:
                continue
                
            frame_bytes = buffer.tobytes()
            
            # Yield the byte array as a multipart MJPEG frame chunk
            yield (b"--frame\r\n"
                   b"Content-Type: image/jpeg\r\n\r\n" + frame_bytes + b"\r\n")
            
            # Small artificial delay to stabilize frame pacing
            time.sleep(0.01)
            
    finally:
        # Ensure the camera hardware is cleanly released if the stream stops
        cap.release()
