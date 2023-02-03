import fs from 'fs';

import { getFormatedFilename } from "../formatter/get.formatted.folder";

export function convertSubdirMarkdownFile(foldername: string, filenameList: string[], language: 'EN' | 'KR') {

    let origin_markdown = fs.readFileSync(`./python/${foldername}/README_ORG(${language}).md`)?.toString();
    origin_markdown += language === 'EN' ? `\n\n- [Read with Korean](./README(KR).md)\n` : `\n\n- [Read with English](./README.md)\n`;
    origin_markdown += language === 'EN' ? '\n\n## File List\n\n' : '\n\n## 파일 리스트\n\n';

    for (let idx = 0; idx < filenameList.length; idx++) {
        const filename = filenameList[idx]
        
        const formattedFilename = getFormatedFilename(filename);

        origin_markdown += `${idx + 1}. [${formattedFilename}](./${filename})\n`;
        console.log(origin_markdown);
        
    }

    return origin_markdown

}