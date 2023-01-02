console.log('rquire가 젤 위에 올 필요 없음');

module.exports ='나를 찾아봐';

require('./var');

console.log('require.cache');
console.log(require.cache);
console.log('require.main입니다');
console.log(require.main === module);
console.log(require.main.filename);