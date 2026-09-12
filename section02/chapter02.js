// function returnFalse()
// {
//     console.log("False 함수");
//     return false;
// }

// function retunTrue()
// {
//         console.log("True 함수");
//     return 10;
// }

// console.log(returnTrue() || retunFlase());

//단락 평가 활용 사례 
function printName(person)
{
   const name = person && person.name;
        console.log(name || "person의 값이 없음");
}
printName();
printName({name:"정재민"});