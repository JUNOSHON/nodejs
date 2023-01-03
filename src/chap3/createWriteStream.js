const fs = require('fs');

const writestream = fs.createWriteStream('./writeme2.txt');
writestream.on('finish' , () => {
    console.log('파일 쓰기 완료');
});

writestream.write('이 글을 쓴다');
writestream.write('한 번 더 쓴다.');
writestream.end();
