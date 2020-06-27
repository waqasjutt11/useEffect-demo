import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const data = {title: "waiting for data"}
  const [todo, setTodo] = useState(data)
  const [isData, setData]= useState(false)
  const [isFitching, setFitching] = useState(false)

  useEffect(()=>{
    async function fetchdata(){
      setFitching(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log("response=", response)
      let data2 = await response.json()
      setTodo(data2)
      setFitching(false)
      console.log("data=", todo)
    }
    fetchdata();
  },[isData])
  if (isFitching){
    return<div>Data loading.....</div>
  }

  



  return (
    <div>
     <span> fetching data in javascript {todo.title}</span>
    </div>
  );
}
export default App;
