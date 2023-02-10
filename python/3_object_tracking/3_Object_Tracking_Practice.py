import cv2

tracker = cv2.TrackerKCF_create()

video = cv2.VideoCapture('../../assets/Examples/street.mp4')

ret, frame = video.read()

border_box = cv2.selectROI(frame)

is_inited = tracker.init(frame, border_box)

cv2.imshow('Tracking', frame)

while True:
    ok, frame = video.read()
    if not ok:
        break
        
    
    is_tracked, border_box = tracker.update(frame)
    if is_tracked:
        
        (x, y, w, h) = [int(value) for value in border_box]
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2, 1)
        
    else:
        cv2.putText(frame, 'Error', (100, 80), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
    
    cv2.imshow('Tracking', frame)
    
    if cv2.waitKey(10) & 0xFF == 27:
        
        break
        

cv2.destroyAllWindows()
video.release()