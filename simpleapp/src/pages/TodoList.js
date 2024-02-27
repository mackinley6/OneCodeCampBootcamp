// ToDoList.js
import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const ToDoList = () => {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (todo.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, todo]);
      setTodo('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-5">
      <h2>Things to do today. Do it or else...</h2>
      <Form className="mb-3">
        <Form.Group>
          <Form.Control type="text" placeholder="Enter a new task" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Form>

      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task}
            <Button variant="danger" className="ml-2" onClick={() => handleRemoveTask(index)}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ToDoList;
