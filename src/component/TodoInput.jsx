import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from 'uuid';
export const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const inputHandleChange = (e) => {
    
   if(e.target.value !==""){

    setTodo(e.target.value);
   }
  };

  const clickHandle = (e) => {
    e.preventDefault();
    // {id: 111, text: 'Some text', complete: false}
    if(todo !== ""){

     const newTodo = {
      id: uuidv4(),
      text: todo,
      complete: false,
     };
     addTodo(newTodo);
     
     setTodo(" ");
    }
  };

  return (
    <div>
      TodoInput
      <input type="text" value={todo} placeholder="Enter a Todo..." onChange={inputHandleChange} />{" "}
      <button onClick={clickHandle}>+</button>
    </div>
  );
};
