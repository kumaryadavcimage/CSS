function blockingCodeForMOreThanASec(){
    for(let i=0;i<1000000000;i++){
        // some task here
    }
}
let x=10;
setTimeout(() => {
    console.log('Timer 1 done')
},5000);
blockingCodeForMOreThanASec()
setTimeout(() => {
    console.log('Timer 2 done');
    
},3000)
setTimeout(() => {
    blockingCodeForMOreThanASec()
    console.log('Timer 3 done')
    x++;
},100)
blockingCodeForMOreThanASec();
console.log(x);
