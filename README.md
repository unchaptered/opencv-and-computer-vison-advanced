
# Opencv and Computer Vision Master Class

Learning about so many library for Computer Vision.

- [ ] Face Detection, Face Recognition,
- [ ] Object Detection, Object Tracking,
- [ ] Image Classification with ANN, CNN
- [ ] Emotion Classification with ANN
- [ ] Image Segmentation
- [ ] Transfer Learning and Fine Tuning 
- [ ] Auto Encoder
- [ ] Gesture Detection
- [ ] Deep Dream
- [ ] Style Trnasfer
- [ ] GAN

## Installation

```bash
conda create -n computer-vision-master-class python=3.8
conda activate computer-vision-master-class
conda install -c conda-forge opencv                     # https://anaconda.org/conda-forge/opencv
conda install -c conda-forge dlib                       # https://anaconda.org/conda-forge/dlib

conda install -c anaconda scikit-learn                  # https://anaconda.org/anaconda/scikit-learn
conda install -c anaconda seaborn                       # https://anaconda.org/anaconda/seaborn
```

## Chapters 

 We talked about Image & Video Processing with Deep Laerning.<br>If you want to know detailed chaptered, please check [this](./README.md#detailed-chapter) 

0. [thoery](./python/0_thoery/README.md)
1. [face detection](./python/1_face_detection/README.md)
2. [face recognition](./python/2_face_recognition/README.md)

### Detailed Chapter 

0. [thoery](./python/0_thoery/README.md)
   1. [이미지와 픽셀.md](./python/0_thoery/1_%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%99%80_%ED%94%BD%EC%85%80.md)
   2. [Face Detection Haaracascade Classifier.md](./python/0_thoery/2_Face_Detection_Haaracascade_Classifier.md)
   3. [Face Detection HOG Classifier.md](./python/0_thoery/3_Face_Detection_HOG_Classifier.md)
   4. [Face Recognition LBPH Algorithm.md](./python/0_thoery/4_Face_Recognition_LBPH_Algorithm.md)
1. [face detection](./python/1_face_detection/README.md)
   1. [Face Detection with Haarcascade and OpenCV.ipynb](./python/1_face_detection/1_Face_Detection_with_Haarcascade_and_OpenCV.ipynb)
   2. [Eye Detection with Haarcascade and OpenCV.ipynb](./python/1_face_detection/2_Eye_Detection_with_Haarcascade_and_OpenCV.ipynb)
   3. [Car Detection with Haarcascade and OpenCV.ipynb.ipynb](./python/1_face_detection/3_Car_Detection_with_Haarcascade_and_OpenCV.ipynb.ipynb)
   4. [Clock Detection with Haarcascade and OpenCV.ipynb.ipynb.ipynb](./python/1_face_detection/4_Clock_Detection_with_Haarcascade_and_OpenCV.ipynb.ipynb.ipynb)
   5. [Face Detection with Histograms of Orientied Gradients.ipynb](./python/1_face_detection/5_Face_Detection_with_Histograms_of_Orientied_Gradients.ipynb)
   6. [Face Detection with CNN.ipynb](./python/1_face_detection/6_Face_Detection_with_CNN.ipynb)
   7. [Face Detection Practice.ipynb](./python/1_face_detection/7_Face_Detection_Practice.ipynb)
   8. [Face Detection Webcam.py](./python/1_face_detection/8_Face_Detection_Webcam.py)
2. [face recognition](./python/2_face_recognition/README.md)
   1. [Face Recognition with LBPH and OpenCV.ipynb](./python/2_face_recognition/1_Face_Recognition_with_LBPH_and_OpenCV.ipynb)
   2. [Face Recognition with LBPH and OpenCV Advanced.ipynb](./python/2_face_recognition/2_Face_Recognition_with_LBPH_and_OpenCV_Advanced.ipynb)
   3. [Face Recognition with Dlib, CNN and distance calculation.ipynb](./python/2_face_recognition/3_Face_Recognition_with_Dlib,_CNN_and_distance_calculation.ipynb)
   4. [Face Recognition Practice.ipynb](./python/2_face_recognition/4_Face_Recognition_Practice.ipynb)
   5. [Face Recognition Webcam.py](./python/2_face_recognition/5_Face_Recognition_Webcam.py)
   6. [ MACOSX](./python/2_face_recognition/__MACOSX)
   7. [classifier.yml](./python/2_face_recognition/lbph_classifier.yml)
   8. [classifier tunning.yml](./python/2_face_recognition/lbph_classifier_tunning.yml)
   9. [lbph classifier.pyml](./python/2_face_recognition/prac_lbph_classifier.pyml)
   10. [](./python/2_face_recognition/yalefaces)
