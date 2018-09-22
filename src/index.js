module.exports = function getZerosCount(number, base) {
  var countZero = number;

  for (let i = 2; i <= base; i++) {

    if (base % i == 0) {

      let exp = 0;

      while (base % i == 0) {
        base /=  i;
        exp++;
      }

      let count = 0;
      let tempNumber = number

      while (tempNumber / i > 0) {
        count = count + Math.floor(tempNumber / i);
        tempNumber /= i;
      }

      if (countZero > Math.floor(count / exp)) countZero = Math.floor(count / exp);
      
    }

  }

  return countZero;
}