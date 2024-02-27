import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './pages/ContactForm';
import ToDoList from './pages/TodoList';
import Header from './components/Header';
import Important from './pages/Important';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/important" element={<Important/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
