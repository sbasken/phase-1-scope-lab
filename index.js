// Write your solution in this file!
var customerName = 'bob'
var bestCustomer;
const leastFavoriteCustomer = "you"


function upperCaseCustomerName(e) {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'me'
}