
import './App.css'
import {useState} from "react"; 
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";


function App() {

return (
  <>
      <Bulb/>
<Counter/>
  </> 
  );
}

export default App;


// 1. state 
// 2. props 
// 3. 부모 컴포넌트 가 변경이 될 때 리렌더링 일어남