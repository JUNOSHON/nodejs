import fs from 'fs/promises';

async function answer() {
    let data = await fs.readFile('./readme2.txt');
    console.log('1번', data.toString());

    data = await fs.readFile('./readme2.txt');
    console.log('2번', data.toString());

    data = await fs.readFile('./readme2.txt');
    console.log('3번', data.toString());
    
}
answer();