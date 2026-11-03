
const Button = ({children,text,color="black"}) =>{ 
   //이벤트 객체
    const onClickButton = (e) =>{
        console.log(e);
    console.log(text);
};

    return (
    <button 
    // onClick={onClickButton} //콜백 함수 처럼 onClickButton() 괄호 넣지 않기
    onMouseEnter={onClickButton}
    style={{color:color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};



export default Button;