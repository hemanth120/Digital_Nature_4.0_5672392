import React, { Component } from 'react';
import './RegisterForm.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Validate name
    if (name.length < 5) {
      alert("Name must be at least 5 characters long.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    alert(`Name: ${name}`);
    alert(`Email: ${email}`);
    alert(`Password: ${password}`);
    alert("Form submitted!");
  };

  render() {
    return (
      <div>
        <h2>Register Here!!!</h2>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
