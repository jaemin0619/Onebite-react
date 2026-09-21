// javaScrpit는 동기적으로 코드를 실행한다. 
// javascript 엔진에는 쓰레드가 1뿐 -> 비동기로 돌려야 함 

// console.log(1);
// console.log(3);

setTimeout(()=>{
    console.log(2);
},3000);
console.log(3);