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

  // Visa card has prefix of 4 and a length of 13, 16, or 19
  // MasterCard has a prefix of 51-55 and a length of 16

 // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
 // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  var cardLength = cardNumber.length;
  var firstIndex = cardNumber[0];
  var secondIndex = cardNumber[1];

  if ((cardLength >= 12 && cardLength <= 19) && firstIndex === '5') {
    if (secondIndex >= '1' && secondIndex <= '5') {
      return 'MasterCard';
    } else {
      var maeRange = ['5018', '5020', '5038'];
      for (var i = 0; i < maeRange.length; i++) {
        if (cardNumber.indexOf(maeRange[i])) {
          return 'Maestro';
        }
      }
    }
  } else if ((cardLength >= 12 && cardLength <= 19) && firstIndex === '6' && secondIndex === '3') {
    return 'Maestro';
  } else if (cardLength === 14 && firstIndex === '3') {
    if (secondIndex === '8' || secondIndex === '9') {
      return 'Diner\'s Club';
    }
  } else if (cardLength === 15 && firstIndex === '3') {
    if (secondIndex === '4' || secondIndex === '7') {
      return 'American Express';
    }
  } else if ((cardLength === 13 || cardLength === 19 || cardLength === 16) && firstIndex === '4') {
    return 'Visa';
  } else if ((cardLength === 16 || cardLength === 19) && firstIndex === '6') {
    var disRange = ['644', '645', '646', '647', '648', '649', '6011', '65'];
    for (var l = 0; l < disRange.length; l++) {
      if (cardNumber.indexOf(disRange[l]) > -1) {
        return 'Discover';
      }
    }
  } else {
    return;
  }
};


