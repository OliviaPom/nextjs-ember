import React from 'react'
import SavingsResult from './savings-result'

class SavingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPay: '',
      numberOfEmployees: '' 
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      totalPay: this.totalPay.value,
      numberOfEmployees: this.numberOfEmployees.value
    });
  }


  render() {
    return (
      <div className="container">
        <div className="form-container">
          <h2>Savings Calculator</h2>
          <form onSubmit={this.handleSubmit}>
            <label className="form-label">
              How much do you currently pay your accountant per month?
              <br />
              <input className="form-input" type="number" ref={input => this.totalPay = input}/>
            </label>
            <br />
            <label className="form-label">
              How many employees do you have?
              <br />
              <input className="form-input" type="number" ref={input => this.numberOfEmployees = input}/>
            </label>
            <br />
            <input className="button" type="submit" value="Find out how much I'll save" />
          </form>
        </div>
        <SavingsResult employees={this.state.numberOfEmployees} pay={this.state.totalPay}/>



        {/* CSS */}
        <style jsx>{`
          .form-container {
            width: 60%;
            margin-left: 70px;
            margin-right: 100px;
            text-align: center;
          }
          .form-container > h2 {
            font-size: 24px;
            margin-bottom: 5vh;
          }
          .form-input {
            width: 100%;
            background-color: rgb(220,220,220);
            border: none;
            padding: 12px 12px;
            margin: 12px 0;
            color: #EA5F76;
          }
          .form-label {
            font-family: 'Nanum Gothic', sans-serif;
            font-size: 14px;
          }
          .button {
            background-color: #EA5F76;
            color: white;
            width: 110%;
            border: none;
            padding: 20px 20px;
            margin: 12px 0;
            font-size: 16px;
          }

          @media only screen and (min-width: 1000px){ 
            .container {
              display: flex;
              margin-top: 10vh;
            }
            .form-container {
              width: 30%;
              margin-left: 100px;
              margin-right: 100px;
              text-align: left;
            }

            .form-container > h2 {
              font-size: 40px;
              margin-bottom: 10vh;
            }
            .form-input {
              width: 100%;
              background-color: rgb(220,220,220);
              border: none;
              padding: 20px 20px;
              margin: 12px 0;
              color: #EA5F76;
            }
            .form-label {
              font-family: 'Nanum Gothic', sans-serif;
              font-size: 14px;
            }
            .button {
              background-color: #EA5F76;
              color: white;
              width: 110%;
              border: none;
              padding: 20px 20px;
              margin: 12px 0;
              font-size: 16px;
            }
          }
        `}</style>
      </div>
      


    )
  };
}


export default SavingsForm;