import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: '',
      convertedAmount: null
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    
    if (currency === 'Euro') {
      // Convert INR to Euro (approximate rate: 1 Euro = 80 INR)
      const converted = parseFloat(amount) / 80;
      this.setState({ convertedAmount: converted });
      alert(`Converting to Euro. Amount is ${converted}`);
    }
  }

  render() {
    return (
      <div className='form-container'>
        <h1 >Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            
            <label>
              Amount:  
              <input
                type="number"
                name="amount"
                value={this.state.amount}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Currency:
              <textarea
                name="currency"
                value={this.state.currency}
                onChange={this.handleInputChange}
              >
              </textarea>
            </label>
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
        
        {this.state.convertedAmount && (
          <p>
            Converted Amount: {this.state.convertedAmount.toFixed(2)} {this.state.currency}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;