import { useRef, useState } from "react";

function App(){


let todoValue = useRef()
let [todo , setTodo] = useState([])

  const addTodo = (event)=>{
  event.preventDefault()
  console.log(todoValue.current.value);
  todo.push(todoValue.current.value)
  console.log(todo);
  todoValue.current.value=""
  setTodo([...todo])
  }

  const deleteTodo = (index)=>{
    todo.splice(index , 1)
    setTodo([...todo])
    
  }

  const editTodo = (index)=>{
    let editValue = prompt('Enter New Value')
    todo.splice(index , 1 , editValue)
    setTodo([...todo])
    
  }


  return(
    <>
    
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Enter Todo" ref={todoValue} required/>
      <button>Add Todo</button>
    </form>

    <ul>
      {todo.map((item , index)=>{
        return(
          <div>
            <li>{item}</li>
            <button onClick={()=>deleteTodo(index)}>Delete</button>
            <button onClick={()=>editTodo(index)}>Edit</button>
          </div>
        )
      })}
    </ul>
    </>
  )
}

export default App