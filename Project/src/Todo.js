import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
export function Todo(props){
    const [value,setValue]=useState("")
    
   function handleChange(e){
    props.addtodos(value)
    e.preventDefault()  
    setValue("")   
}
    
    return (
        
        <>
        <fieldset className='todoinput'> To-do list
        <form onSubmit={handleChange}>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} className='input' style={{width:'50%'}} />
            
            <button type='submit'  disabled={!value} className="btn-sm ">Add</button>
            
        </form>
        </fieldset>
        </>
    )
}
export const list= ()=>{

}
