let user_input = parseInt(prompt("enter a number"));
function findPrimeNumbers(num) {
  if (num <= 2) {
    alert("choose a bigger number");
  } else {
    let primeNumbers;
    let arr = [];
    for (let i = 3; i <= num; i++) {
      arr.push(i);
    }
    console.log(arr);
    console.log(primeNumbers);
  }
}
findPrimeNumbers(user_input);
