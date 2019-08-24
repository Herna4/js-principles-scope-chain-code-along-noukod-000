var customerName = "bob";
const leastFavoriteCustomer = "Joe";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Dave"
}