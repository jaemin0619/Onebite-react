// javaScrpit는 동기적으로 코드를 실행한다. 
// javascript 엔진에는 쓰레드가 1뿐 -> 비동기로 돌려야 함 

// console.log(1);
// console.log(3);

setTimeout(()=>{
    console.log(2);
},3000);
console.log(3);

// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행됨 

// Web APIs : 웹 브라우저가 직접 관리하는 별도의 영역