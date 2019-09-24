module.exports = function multiply(first, second) {
  const firstArray = [...first].reverse();
  const secondArray = [...second].reverse();

  const result = firstArray.reduce((firstAccumulator, firstValue, firstIndex) => {
    secondArray.reduce((secondAccumulator, secondValue, secondIndex) => {
      if (!secondAccumulator[firstIndex + secondIndex]) {
        secondAccumulator[firstIndex + secondIndex] = 0;
      }

      secondAccumulator[firstIndex + secondIndex] += firstValue * secondValue;

      return secondAccumulator;
    }, firstAccumulator);

    return firstAccumulator;
  }, []);

  result.forEach((value, index) => {
    if(value >= 10) {
      if (!result[index + 1]) {
        result[index + 1] = 0;
      }

      result[index + 1] += parseInt(value / 10);
      result[index] %= 10;
    }
  });

  result.reverse();

  for (i = 0; i < result.length; i++){
    if (result[i] === 0){
      result.splice(i, 1);
      i--;
    }else{
      i = result.length * 2;
    }
  }

  return result.join('');
}
