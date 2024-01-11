import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

const Todo1 = () => {
  const[todo, setTodo] = useState('')
  const[input, setInput] = useState([])

  const handleChange = () => {
   setInput([...input,todo])
   setTodo('')
  }

  const handleDelete = (id) => {
    setInput(input.filter((_,i) => i !== id ))
  }
  return (
  <>
    <div className=' flex justify-center items-center flex-col mt-[100px]'>
    <input type="text" value={todo} onChange={e => setTodo(e.target.value)} 
      className='border-2 border-cyan-700 w-[400px] h-[50px] text-center text-2xl'
    />  <br />
     <button onClick={handleChange} className='bg-black text-white px-5 py-2 rounded-3xl'>click</button>
       <div>
        {
          input.map((item,id)=>(
            <ul key={id}>
              <li> <label htmlFor="" className='text-4xl'>{item}</label>  &nbsp; 
               <input type="checkbox" className='w-5 h-5' />  &nbsp;
               <button onClick={() => handleDelete(id)}> <MdDeleteForever  size={20}/> </button></li>
            </ul>
          ))
        }
       </div>
    </div>
  </>
  )
}

export default Todo1
