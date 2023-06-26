import './App.css';
import React, {useState} from 'react';





function App() {
const state = useState();
  const [count,setCount]= useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0){
    setCount(count - 1);
  }else{
    setCount(0);
  }
};
  return (
    <main>

    <h1>{count}</h1>
    <button1 onClick={IncNum} >Increment</button1>
    <button2 onClick={DecNum} >Decrement</button2>

    </main>
  );
}

export default App;


