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

  if ((cardLength >= 12 && cardLength <= 19)) {
    var maestroPrefixes = ['5018', '5020', '5038', '6304'];
    for (var i = 0; i < maestroPrefixes.length; i++) {
      if (cardNumber.indexOf(maestroPrefixes[i]) === 0) {
        return 'Maestro';
      }
    }
    if (cardLength >= 16 && cardLength <= 19) {
      for (var chinaPf = 622126; chinaPf <= 622925; chinaPf++) {
        var cardSubstr = Number(cardNumber.substring(0, 6));
        if (cardSubstr === chinaPf) {
          return 'China UnionPay';
        }
      }
      for (var secChinaPf = 6282; secChinaPf <= 6288; secChinaPf++) {
        var secSubstr = Number(cardNumber.substring(0, 4));
        if (secSubstr === secChinaPf) {
          return 'China UnionPay';
        }
      }
      for (var thirdChinaPf = 624; thirdChinaPf <= 626; thirdChinaPf++) {
        var thirdSubstr = Number(cardNumber.substring(0, 3));
        if (thirdSubstr === thirdChinaPf) {
          return 'China UnionPay';
        }
      }
      if (cardLength === 16 || cardLength === 19) {
        for (var discoverPf = 644; discoverPf <= 649; discoverPf++) {
          var discoverSubstr = Number(cardNumber.substring(0, 3));
          if (discoverSubstr === discoverPf) {
            return 'Discover';
          }
        }
        var discoverOtherPf = ['6011', '65'];
        for (var j = 0; j < discoverOtherPf.length; j++) {
          if (cardNumber.indexOf(discoverOtherPf[j]) === 0) {
            return 'Discover';
          }
        }
      }
      if (cardLength === 16 || cardLength === 18 || cardLength === 19) {
        var switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
        for (var k = 0; k < switchPrefixes.length; k++) {
          if (cardNumber.indexOf(switchPrefixes[k]) === 0) {
            return 'Switch';
          }
        }
      }
      if (cardLength === 16) {
        for (var mastercardPf = 51; mastercardPf <= 55; mastercardPf++) {
          var mastercardSubstr = Number(cardNumber.substring(0, 2));
          if (mastercardSubstr === mastercardPf) {
            return 'MasterCard';
          }
        }
      }
    }
    if ((cardLength === 13 || cardLength === 16 || cardLength === 19) && firstIndex === '4') {
      return 'Visa';
    }
    if (cardLength === 15) {
      var americanexpPrefixes = ['34', '37'];
      for (var l = 0; l < americanexpPrefixes.length; l++) {
        if (cardNumber.indexOf(americanexpPrefixes[l]) === 0) {
          return 'American Express';
        }
      }
    }
    if (cardLength === 14) {
      var dinersClubPrefixes = ['38', '39'];
      for (var m = 0; m < dinersClubPrefixes.length; m++) {
        if (cardNumber.indexOf(dinersClubPrefixes[m]) === 0) {
          return 'Diner\'s Club';
        }
      }
    }
  } else {
    return;
  }
};


