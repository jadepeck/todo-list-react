import React from 'react';

const TodoItem = ({ text, onDelete }) => {
  return (
  <li>
    {text}
    <button className="delete-button" onClick={onDelete}>
      delete
    </button>
    </li>
  );
};

export default TodoItem;
