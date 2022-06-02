import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Todo } from './Todo'


export const TodoList = () => {
 const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
 
 
  return (
    <div>TodoList
    
    {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            clickToToggle={() => toggleTodo(todo.id)}
            clickToDelete={() => deleteTodo(todo.id)}
          />
        ))}
     
    </div>
  );
};
