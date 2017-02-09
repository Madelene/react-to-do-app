import React from 'react';

const EachTodo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={() => 
      {remove(todo.id)}}>
      {todo.text}</li>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos'
  console.log(todos);
  const todoNode = todos.map((todo) => {
    return (<EachTodo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul className="todos">{todoNode}</ul>);
}

export default TodoList;