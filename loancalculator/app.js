/*
  LOAN CALC
*/

// years dropdown settings and run
const minYears = 1;
const maxYears = 30;
document.addEventListener('DOMContentLoaded', populateYears);

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', (e) => {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(() => {calculateInput(e)}, 2000);

  e.preventDefault();
});


function calculateInput(e) {
  // input
  const amountIn = e.target.amount.value;
  const interestIn = e.target.interest.value;
  const yearsIn = e.target.years.value;
  // console.log(e.target.amount);

  // result elements
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // validate inputs
  /*
  * TODO:
  * - pass input element to showAlert
  */ 
  if(amountIn.length === 0 || amountIn <= 0) {
    showAlert('Enter amount you wish to borrow.')
    clearResults();
  } else if(interestIn.length === 0 || interestIn <= 0) {
    showAlert('Enter desired loan interest rate.')
    clearResults();
  } else if(isNaN(yearsIn) || yearsIn <= 0) {
    showAlert('Select loan length.')
    clearResults();
  } else {
    // clear any error still on screen
    if(document.querySelector('.alert')) {
      clearAlert();
    }
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

      // Show results
      document.getElementById('results').style.display = 'block';
      // Hide loading
      document.getElementById('loading').style.display = 'none';
    } else {
      console.log('ERROR');
    }
  }
}


// helper functions
///////////////////////////////////////////////////
// fill dropdown list
function populateYears() {
  const yearDropDown = document.getElementById('years');
  
  // create option element loop and append
  for(let i = minYears; i <= maxYears; i++) {
    const yearOpt = document.createElement('option');
    yearOpt.value = i;
    yearOpt.innerText = i;
    yearDropDown.appendChild(yearOpt);
  }
}


// missing/incorrect input value error handle
// validate inputs
  /*
  * TODO:
  * - accept input element and change background color on err
  * - find a better location for error so the page doesnt jump when messege clears
  */
function showAlert(message) {
  // check if alert still persists
  if(document.querySelector('.alert')) {
    document.querySelector('.alert').remove();
  }

  // get elements to insert alert
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  const loading = document.getElementById('loading');

  // create div
  const errAlert = document.createElement('div');
  errAlert.className = 'alert alert-danger';
  //errAlert.innerHTML = message;
  errAlert.appendChild(document.createTextNode(message));

  // insert on card and before heading
  card.insertBefore(errAlert, loading);
  
  // alert clears after 3 seconds
  setTimeout(clearAlert, 5000);
}


// Alert clear
function clearAlert() {
  document.querySelector('.alert').remove();
}


// Clear results pane
function clearResults() {
  // Show results
  document.getElementById('results').style.display = 'none';
  // Hide loading
  document.getElementById('loading').style.display = 'none';
}
