var customerName = 'bob'


function upperCaseCustomerName() {
    return  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
   
   bestCustomer = 'not bob'

  return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

const leastFavoriteCustomer = 'Peter'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Dave'

    return leastFavoriteCustomer;
}