import fs from 'fs';

import { getFolderList } from './folder.explorer';
import { convertMainMarkdownFile } from './markdown/main.converter';
import { convertSubdirMarkdownFile } from './markdown/subdir.converter';

const topFolderList = getFolderList('/');
const secTopFolderList = topFolderList.map(topFolder => getFolderList(topFolder));

const folderMap = new Map();
for (let idx = 0; idx < topFolderList.length; idx++)
    folderMap.set(topFolderList[idx], secTopFolderList[idx]);
    
const markdown = convertMainMarkdownFile(folderMap);

fs.writeFileSync('./README.md', markdown, { encoding: 'utf8' });

for (const [foldername, filenameList] of folderMap) {

    const markdown = convertSubdirMarkdownFile(foldername, filenameList, 'EN');
    const markdown_kr = convertSubdirMarkdownFile(foldername, filenameList, 'KR');

    fs.writeFileSync(`./python/${foldername}/README.md`, markdown, { encoding: 'utf8' })
    fs.writeFileSync(`./python/${foldername}/README(KR).md`, markdown_kr, { encoding: 'utf8' })
}