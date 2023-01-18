import React from 'react'

interface Props{
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}

export const Input = ({todo, setTodo, handleAdd}:Props) => {
  return (
   <form className="relative w-[50vw] flex items-center h-[30vh]"  onSubmit={(e) => {
    handleAdd(e)
  }}>
    <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter here ...." className="p-2 rounded-3xl outline-none relative w-[100vw] mr-2" />
    <button className="absolute items-center right-7 bg-white rounded-3xl text-black">ADD</button>
   </form>
  )
  }
