import { useRef, useState } from 'react';
import './App.css';

function App() {
  var [todos,setTodos] = useState([])

  var todo=useRef();
  console.log("to is working",todo.current)

function add(){
  console.log("jafdsk")
  
  setTodos([...todos,todo.current.value])
  console.log(todos)
  todo.current.value = ''

}

  return (
    <div className="App">
     
     <input ref={todo}/>
     <button onClick={add}>Add</button>
     {todos.map((value,i)=>{
       return(
         <div key={i}>{value}</div>
       )
     })}
    </div>
  );
}

export default App;
