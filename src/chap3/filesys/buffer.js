const buffer = Buffer.from("버퍼로 변환");
console.log('from() : ', buffer);
console.log('length:',buffer.length);
console.log('tostring' , buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄'), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);//띄엄 띄엄 띄어쓰기를 하나로 합쳐서 buffer2 에 저장
console.log('concat', buffer2.toString());//합친 버퍼를 출력

const buffer3 = Buffer.alloc(5); //5바이트의 버퍼 생성
console.log('alloc',buffer3);