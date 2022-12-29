function FirstFactorial(num) {
  let facto = 1;
  for (let i = 1; i <= num; i++) {
    facto = facto * i;
  }
  console.log(facto);
  return num;
}

FirstFactorial(4);
// keep this function call here
// console.log(FirstFactorial(readline()));
