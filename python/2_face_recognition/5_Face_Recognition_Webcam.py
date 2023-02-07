# 이 학습자료는 jones과 Gabriel을 기준으로 학습하였습니다.
# 따라서, 대상자의 얼굴은 Unkown 으로 식별될 것입니다.

import cv2

face_detector = cv2.CascadeClassifier('../../assets/Cascades/haarcascade_frontalface_default.xml')
face_recognizer = cv2.face.LBPHFaceRecognizer_create()
face_recognizer.read('lbph_classifier.yml')

width, height = 220, 220
font = cv2.FONT_HERSHEY_COMPLEX_SMALL
camera = cv2.VideoCapture(0)

while(True):
    connected, image = camera.read()
    
    image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    detections = face_detector.detectMultiScale(image_gray, scaleFactor=1.5, minSize=(30, 30), maxSize=(150, 150))
    
    for (x, y, w, h) in detections:
        
        image_face = cv2.resize(image_gray[y:y + w, x:x + h], (width, height))
        
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 0, 255), 2)
        id, confianca = face_recognizer.predict(image_face)
        
        if id == 1:
            name = 'jones'
        elif id == 2:
            name = 'Gabriel'
        else:
            name = 'Unkown'
        
        cv2.putText(image, name, (x, y + (w + 30)), font, 2, (0, 0, 255))
        cv2.putText(image, str(confianca), (w, y + (h + 50)), font, 1, (0, 0, 255))
        
    cv2.imshow('Face', image)
    
    k = cv2.waitKey(1) & 0xFF
    
    if k == 27:
        break
    
cv2.destroyAllWindows()
camera.release()