import cv2

face_detector = cv2.CascadeClassifier('../../assets/Cascades/haarcascade_frontalface_default.xml')

cam = cv2.VideoCapture(0)
cam.set(cv2.CAP_PROP_FRAME_WIDTH, cam.get(cv2.CAP_PROP_FRAME_WIDTH) * 2)
cam.set(cv2.CAP_PROP_FRAME_HEIGHT, cam.get(cv2.CAP_PROP_FRAME_HEIGHT) * 2)

ret, frame = cam.read()
print(frame.shape)

while True:
    ret, frame = cam.read()
    
    if ret == True:
        face_detections = face_detector.detectMultiScale(frame, scaleFactor = 1.485, minNeighbors=3, maxSize=(300, 300), minSize=(150, 150))
        for (x, y, w, h) in face_detections:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 255), 10)

        cv2.imshow('frame', frame)
        
        k = cv2.waitKey(1) & 0xFF
        if k == 27:
            break
    else:
        break
    
cv2.destroyAllWindows()
cam.release()
