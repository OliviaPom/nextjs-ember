import React from 'react'

class SavingsResult extends React.Component {

  savingsCalculation = (numberOfEmployees, totalPay) => {
    const emberPerYear = (39 * 12) + (numberOfEmployees * 4);
    const savingsPerYear = (totalPay * 12) - emberPerYear;
    return savingsPerYear;
  }

  render() {
    let employees = parseInt(this.props.employees)
    let pay = parseFloat(this.props.pay)
    if (!this.savingsCalculation(employees, pay)) {
      return (
          <div className="initialResult">
            <h1>Start saving today, check now with our calculator</h1>

             {/* CSS */}
            <style jsx>{`
              .initialResult > h1 {
                margin-top: 20vh;
                margin-left: 5vw;
                color: #EA5F76;
                align-item: center;
              }
            `}</style>
          </div>

      )}
      return (
        <div className="result">
          <p>You'll save</p>
            <h1>£{this.savingsCalculation(employees, pay)}</h1>
          <p>per year</p>


        {/* CSS */}
          <style jsx>{`
              .result {
                text-align: center;
                margin-top: 20vh;
                margin-left: 20vw;
              }
              .result > h1 {
                color: #EA5F76;
                align-item: center;
                font-size: 80px;
              }

              .result > p {
                font-size: 20px;
              }
            `}</style>
        </div>
      )
    }
  }

export default SavingsResult;