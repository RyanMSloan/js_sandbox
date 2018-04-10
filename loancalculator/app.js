/*
  LOAN CALC
*/

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateInput);


function calculateInput(e) {
  // input
  const amountIn = e.target.amount.value;
  const interestIn = e.target.interest.value;
  const yearsIn = e.target.years.value;
  
  // // testing
  // console.log(e.target.amount);

  // result elements
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // validate inputs
  // ....

  // calculate and pass to post
  const principal = parseFloat(amountIn);
  const annualInterest = parseFloat(interestIn) / 100 / 12;
  const totalMonths = parseFloat(yearsIn) * 12;
  // calculate monthly payments
  const x = Math.pow(1 + annualInterest, totalMonths);
  const monthly = (principal * x * annualInterest)/(x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * totalMonths).toFixed(2);
    totalInterest.value = ((monthly * totalMonths) - principal).toFixed(2);
  } else {
    console.log('ERROR');
  }

  e.preventDefault();
}