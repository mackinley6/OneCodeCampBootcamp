// ContactForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestions: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group controlId="formSuggestions">
          <Form.Label>Suggestions</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your suggestions" name="suggestions" value={formData.suggestions} onChange={handleChange} required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {formSubmitted && (
        <Alert variant="success" className="mt-3">
          Suggestions submitted successfully!
        </Alert>
      )}
    </Container>
  );
};

export default ContactForm;
