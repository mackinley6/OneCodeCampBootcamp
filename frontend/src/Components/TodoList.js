import React, { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editInfo, setEditInfo] = useState(null);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodo([...todo, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...todo];
    updatedTasks.splice(index, 1);
    setTodo(updatedTasks);
  };

  const startEdit = (index) => {
    setEditInfo(index);
    setInputValue(todo[index].text);
  };

  const cancelEdit = () => {
    setEditInfo(null);
    setInputValue('');
  };

  const saveEdit = (index) => {
    const updatedTasks = [...todo];
    updatedTasks[index].text = inputValue;
    setTodo(updatedTasks);
    cancelEdit();
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todo.map((task, index) => (
        <li key={index}> {index === editInfo ? (
        <>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => saveEdit(index)}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
        </>
    ) : (
        <>
            {task.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => startEdit(index)}>Edit</button>
        </>
            )}
        </li>
    ))}
      </ul>
    </div>
  );
};

export default TodoList;
