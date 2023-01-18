import React, {useState} from 'react';
import './App.css';
import { Input } from './components/Input';
import { Todo } from './components/model';
import { TodoList } from './components/TodoList';

function App() {
  const[todo, setTodo] = useState<string>("")
  const[todos, setTodos] =useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
   
    if (todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}])
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="w-[100vw] h-[100vh] bg-blue-400 items-center flex flex-col relative ">
      <h1 className="text-3xl m-10 flex items-center">TODO- <span className="font-bold text-white">L</span></h1>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
     
    </div>
  );
}

export default App;
