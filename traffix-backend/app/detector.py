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

    try:
        while True:
            # Read the raw image frame from the camera
            success, frame = cap.read()
            if not success:
                print("Warning: Failed to grab frame from camera. Stream may have disconnected.")
                break
            
            # Run the frame through the YOLO model tracking prediction logic
            # This identifies objects like cars, persons, and motorbikes
            results = model.track(frame, persist=True)
            
            # Render bounding boxes directly onto the frame
            annotated_frame = results[0].plot()
            
            # Encode the final image to a jpeg format memory buffer
            ret, buffer = cv2.imencode(".jpg", annotated_frame)
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
