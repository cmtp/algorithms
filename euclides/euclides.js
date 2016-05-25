function mcd(num1, num2) {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    }
    else if (num1 < num2) {
      num2 = num2 - num1;
    }
  }
  return num1;
}

console.log(mcd(160,20));
