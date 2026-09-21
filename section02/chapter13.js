// Promise란? 
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// Promise는 비동기 작업을 감싸는 객체이다.
// 비동기 작업 실행 / 상태 관리 / 작업 결과 저장 / 작업 병렬 실행 / 작업 다시 실행 / 기타 등등 ..

//Promise의 3가지 상태 
// 대기(Pending) -> 성공 or 실패

function add10(num){
    
const promise = new Promise((resolve,reject)=>{
    //비동기 작업 실행하는 함수 
    //executor
    setTimeout(()=>{
        // const num=null;

        if(typeof num ==='number'){
            resolve(num+10);
        }
        else{
            reject("num의 숫자가 아닙니다.");
        }
        // console.log("안녕");
        // resolve("안녕");

        // reject("왜 실패했는지 이유...");
    },2000);
});
return promise;
}

add10(0)
.then((result)=>{
    console.log(result);

   return add10(result);
    }).then((result)=>{
      console.log(result);  
      return add10(undefined);
    }).then((result)=>{
console.log(result);
    }).catch((error)=>{
        console.log(error);
    });




// console.log(promise); 
// setTimeout(()=>{
//     console.log(promise);
// },3000);

// then 메서드 
// -> 그 후에 
// promise.then((value)=>{
//     console.log(value);
// });
// promise.catch((error)=>{
//     console.log(error);
// });

// promise
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>
// {
//     console.log(error);
// });