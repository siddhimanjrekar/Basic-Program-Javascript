//Logic to check whether a number is prime or not.
function isPrime(number) {
    if (number <= 1) {
      return "Number is not prime";
    } 
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return "Number is not prime";
      }
    }
    return "Number is prime";
  }

//Logic to find sum of fibonaci series upto n.
  function fibonacciSeriesSum(n) {
    if (n <= 0) {
      return 0;
    }
    let fibSeries = [0, 1];
    let sum = 1;
    for (let i = 2; i < n; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
      sum += fibSeries[i];
    }
    return sum;
  }

//Logic to find count of even, odd and zero.
function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return {
      contOfEvenNumbers: evenCount,
      contOfOddNumbers: oddCount,
      contOfZero: zeroCount
    };
  }

//Function Generator  
  function functionGenerator(operate){
    switch(operate){
        case "isPrime":return["prime number is ",isPrime]
        case "fibonacciSeriesSum":return["fibo is ",fibonacciSeriesSum]
        case "countEvenOddZero":return["odd and even ",countEvenOddZero]
        default:return["invalid",null]
    }
}

let[a, checkPrime]=functionGenerator('isPrime') 
let x= checkPrime (39) 
console.log(x)

let[b, checkFibo]=functionGenerator('fibonacciSeriesSum') 
let y= checkFibo (10) 
console.log(y)

let[c, checkcount]=functionGenerator('countEvenOddZero') 
let z= checkcount ([10,0,0,13,9,4,5,0])
console.log(z)