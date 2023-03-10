import fs from 'fs';
import path from 'path';

const EXCEPT_SET = new Set([
    '.git',                 // For Repositories
    '.github',              // For Repositories
    '.gitignore',           // For Repositories
    '.DS_Store',            // For Repositories
    '.ipynb_checkpoints',   // For *_**_...
    'assets',               // For model, configs
    'cfg',                  // For 8_Yolo_V3
    'model',                // For 8_Yolo_V3
    'videos',               // For 8_Yolo_V3
    'demo.py',              // For 8_Yolo_V3
    'yad2k.py',             // For 8_Yolo_V3
    'LICENSE',              // For 8_Yolo_V3
    'dist',                 // For Repositories
    'images',               // For Repositories
    'node_modules',         // For Repositories
    'package-lock.json',    // For Repositories
    'package.json',         // For Repositories
    'README.md',            // For Repositories
    'README(KR).md',        // For Repositories
    'README_ORG(EN).md',    // For Repositories
    'README_ORG(KR).md',    // For Repositories
    'INSTALLATION.md',      // For Repositories
    'src',                  // For Repositories
    'tsconfig.json',        // For Repositories
    '__MACOSX',                     // For ~/python/2_face_recognition
    'yalefaces',                    // For ~/python/2_face_recognition
    'jones_gabriel',                // For ~/python/2_face_recognition
    'lbph_classifier.yml',          // For ~/python/2_face_recognition
    'lbph_classifier_tunning.yml',  // For ~/python/2_face_recognition
    'prac_lbph_classifier.pyml',    // For ~/python/2_face_recognition
]);


export function getFolderList(fileName: string): string[] {
    
    const temporalPath = path.join(__dirname, '/../python', fileName);
    
    return fs.readdirSync(temporalPath).filter(v => !EXCEPT_SET.has(v));

}