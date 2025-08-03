import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: Math.floor(1 + Math.random() * 100) // Generate ID between 1–100
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const msg = `Thanks ${this.state.ename}\nYour Complaint was Submitted.\nTransaction ID is: ${this.state.NumberHolder}`;
    alert(msg);
    event.preventDefault();
  }

  render() {
    const inputStyle = { width: '300px', padding: '8px' };

    return (
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h2 style={{ color: 'red' }}>Register your complaints here!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={{ marginRight: '10px' }}>Name:</label>
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
              style={inputStyle}
            />
          </div>
          <br />
          <div>
            <label style={{ marginRight: '10px' }}>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows="4"
              style={inputStyle}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
