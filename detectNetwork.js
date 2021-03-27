// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // check cardNumber length first, if 14, do iteration for Diner's club
  // if length=15, then do iteration for American Express
    // diner's club iteration - iterate over cardNumber, check first two chars w/ Number func
      // if values equal 38 or 39, then return 'Diner's Club'
    // american express iteration - iterate over cardNumber, check first two chars w/ Number func
      // if values equal 34 or 37, then return 'American Express
  // if length=13 or 19, iterate, check if first char === 4, return 'Visa' if so
  // if length=16, iterate, check if first char === 4, return 'Visa'
    // else check firstchar = 5, secondchar equals ~[1,2,3,4,5], return 'MasterCard'
  // if none of the lengths, return

  var cardLength = cardNumber.length;
  if (cardLength === 14) {
    for (var i = 0; i < cardLength; i++) {
      var secEle = Number(cardNumber[1]);
      if (Number(cardNumber[0]) === 3 && (secEle === 8 || secEle === 9)) {
        return 'Diner\'s Club';
      }
    }
  } else if (cardLength === 15) {
    for (var i = 0; i < cardLength; i++) {
      var secChar = Number(cardNumber[1]);
      if (Number(cardNumber[0]) === 3 && (secChar === 4 || secChar === 7)) {
        return 'American Express';
      }
    }
  } else if (cardLength === 13 || cardLength === 19) {
    for (var i = 0; i < cardLength; i++) {
      if (Number(cardNumber[0]) === 4) {
        return 'Visa';
      }
    }
  } else if (cardLength === 16) {
    for (var i = 0; i < cardLength; i++) {
      var mcEle = Number(cardNumber[1]);
      if (Number(cardNumber[0]) === 4) {
        return 'Visa';
      } else if (Number(cardNumber[0]) === 5 && (mcEle >= 1 && mcEle <= 5)) {
        return 'MasterCard';
      }
    }
  } else {
    return;
  }
};


