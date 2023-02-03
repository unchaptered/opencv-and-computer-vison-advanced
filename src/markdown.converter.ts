function getFormatedFolder(folderName: string) {
    // '1. Docker Core'
    // [ '1. ', 'Docker Core' ]
    const splitedFolder = folderName.split('_');

    // 'Docker Core'
    // 'Docker Core'
    const [number, ...formatedFolder] = splitedFolder;

    return formatedFolder.join(' ')
}
export function convertMarkdownFile(folderMap: Map<string, string[]>): string {
    let markdown = `
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
- [ ] GAN\n\n`;

    let chapMarkdown = '## Chapters \n\n We talked about Image & Video Processing with Deep Laerning.<br>If you want to know detailed chaptered, please check [this](./README.md#detailed-chapter) \n\n';
    let dtChapMarkdown = '### Detailed Chapter \n\n';

    const BASE_URL = './python/';

    const folderEntries = [...folderMap].sort();
    // console.log(folderEntries);
    for (let idx = 0; idx < folderEntries.length; idx ++) {

        // '1. Docker Core'
        const [ topFolder, secFolderList ] = folderEntries[idx];

        const folderName = getFormatedFolder(topFolder);
        const folderDirName = encodeURI(BASE_URL + topFolder) + '/README.md';

        chapMarkdown += `${idx}. [${folderName}](${folderDirName})\n`;

        dtChapMarkdown += `${idx}. [${folderName}](${folderDirName})\n`;
        for (let jdx = 0; jdx < secFolderList.length; jdx++) {
            dtChapMarkdown += `   ${jdx + 1}. [${getFormatedFolder(secFolderList[jdx])}](${encodeURI(BASE_URL + topFolder + '/' + secFolderList[jdx])})\n`;
        }

    }

    markdown += chapMarkdown + '\n';
    markdown += dtChapMarkdown;

    return markdown;
}
