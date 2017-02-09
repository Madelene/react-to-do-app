import React from 'react';

const TodoForm = ({addTodo}) => {
  // Input tracker
  let input;

  return (
    <div className="form-styles">
      <input className="input-styles" placeholder="Add your to-do here!" ref={node => {
        input = node;
      }} />
   
      <button className="button-styles" onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        Click Me To Add Your List
      </button>
    </div>
  );
};

export default TodoForm;