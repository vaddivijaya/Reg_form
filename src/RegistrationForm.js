// src/RegistrationForm.js
import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'; // Add axios for HTTP requests

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });

      alert(response.data);
    } catch (error) {
      console.error('There was an error!', error);
      alert('Registration failed');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label htmlFor="formFirstName" className="mb-0">First Name</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  id="formFirstName"
                  placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label htmlFor="formLastName" className="mb-0">Last Name</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  id="formLastName"
                  placeholder="Enter last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label htmlFor="formEmail" className="mb-0">Email address</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="email"
                  id="formEmail"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label htmlFor="formPassword" className="mb-0">Password</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="password"
                  id="formPassword"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={4} className="d-flex align-items-center">
                <Form.Label htmlFor="formConfirmPassword" className="mb-0">Confirm Password</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="password"
                  id="formConfirmPassword"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegistrationForm;
