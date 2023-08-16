function generateArrayWithSum(targetSum: number): number[] {
    const result: number[] = [];
    let remainingSum = targetSum;
  
    while (remainingSum > 0) {
      const randomNumber = Math.floor(Math.random() * 5) + 3;
      const nextValue = Math.min(randomNumber, remainingSum);
      result.push(nextValue);
  
      remainingSum -= nextValue;
      
      if (remainingSum <= 0) {
        break;
      }
      
      result.push(1);
      remainingSum -= 1;
    }
  
    return result;
  }
  
export default generateArrayWithSum;