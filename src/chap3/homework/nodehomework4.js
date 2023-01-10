async function answer() {
    
    let data = fs.readFile('./readme2.txt');
    
    
    const res1 = setTimeout(async ()=> {
        data = await fs.readFile('./readme2.txt');
        console.log('1번', data.toString());
    },3000);
    

    
    const res2 = setTimeout(async()=> {
        data = await fs.readFile('./readme2.txt');
        console.log('2번', data.toString());
    },2000);
    

    
    const res3 = setTimeout(async()=> {
        data = await fs.readFile('./readme2.txt')
        console.log('3번', data.toString());
    },1000);
    
}
answer();