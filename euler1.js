var getSumOfMultiplesThreeAndFive = function(limit) {
  
  var isNumberMultipleOfThree = function(numberToEvaluate) {
    return isMultipleOf({
      numberToEvaluate: numberToEvaluate,
      multiple: 3,
    });
  };

  var isMultipleOfFive = function(numberToEvaluate) {
    return isMultipleOf({
      numberToEvaluate: numberToEvaluate,
      multiple: 5,
    });
  };

  var isMultipleOf = function(options) {
    if (options.numberToEvaluate % options.multiple === 0) {
      return true;
    }
    return false;
  };

  var shouldAddThisNumber = function(numberToEvaluate) {
    if (isNumberMultipleOfThree(numberToEvaluate) || isMultipleOfFive(numberToEvaluate)) {
      return true;
    }
    return false;
  };

  var i = 0;
  var sum = 0;

  var addPossibleNumberToResultUntilLimit = function(limit) {
    if (i < limit) {
      if (shouldAddThisNumber(i)) {
        sum += i;
      }
      i++;
      addPossibleNumberToResultUntilLimit(limit);
    } else {
      return;
    }
  };

  addPossibleNumberToResultUntilLimit(limit);
  return sum;

}

var sumResult = getSumOfMultiplesThreeAndFive(1000);

console.log(sumResult);
