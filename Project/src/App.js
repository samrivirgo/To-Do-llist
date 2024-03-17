import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todo } from './Todo';
import { useState } from 'react';
function App() {
   const [todo, setTodo]=useState({
    tasks:""
})
   const addtodos= (task)=>{
        setTodo({...setTodo,tasks:task})
   }
  return(
       <>
       
        <Todo addtodos={addtodos}/>
        <div className='card' style={{width:'200px',}}>
        <h1 className='card-body'>{todo.tasks}</h1>
        
        </div>
       
        </>
     )
}
/**function TodoAdd(){
  return(
   
  )
}**/
export default App;
