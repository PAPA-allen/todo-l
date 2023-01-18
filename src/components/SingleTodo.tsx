import React, {useState} from 'react'
import { Todo } from './model'
import {AiFillEdit} from 'react-icons/ai';
import {MdDeleteOutline,MdDoneOutline} from 'react-icons/md';
import { TodoList } from './TodoList';

type Props={
    todo: Todo;
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};



export const SingleTodo = ({todo, todos, setTodos}:Props) => {

    const [edit, setEdit]=useState<boolean>(false);
    const [editTodo, setEditTodo] =useState<string>(todo.todo);

    const handleDone=(id: number)=>{
        setTodos(todos.map((todo)=>
        todo.id === id? { ...todo, isDone:!todo.isDone}:todo
        )
        );
    };

    const handleDelete=(id: number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }

    const handleEdit=(e:React.FormEvent, id:number )=>{
        e.preventDefault();

        setTodos(
            todos.map((todo)=>(
            todo.id === id?{...todo, todo:editTodo}:todo
        )
        ))
        setEdit(false);
    };
  return (
    <div>
      <form className="bg-white p-2 flex rounded-lg mt-15 sm:justify-evenly" onSubmit={(e)=>handleEdit(e, todo.id)}>
            {edit?(
                    <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
                ):todo.isDone ? (
                    <s>{todo.todo}</s>
                        ):(
                            <span>{todo.todo}</span>
            
                    )}

        <div className="flex bg-white">
            <span className="ml-10 cursor-pointer" onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }
            }}>
                <AiFillEdit size={25}/>
            </span>
            <span className="ml-10 cursor-pointer"  onClick={()=>handleDelete(todo.id)}>
                <MdDeleteOutline size={25}/>
            </span>
            <span className="ml-10 cursor-pointer " onClick={()=>handleDone(todo.id)}>
                <MdDoneOutline size={25}/>
            </span>
        </div>
      </form>
    </div>
  )
}


