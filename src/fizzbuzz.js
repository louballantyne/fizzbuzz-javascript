class Fizzbuzz {
  output(number) {
    if (this.isDivisibleBy3(number) && this.isDivisibleBy5(number)) {
      return "FizzBuzz";
    }
    else if (this.isDivisibleBy3(number)) {
      return "Fizz";
    }
    else if(this.isDivisibleBy5(number)) {
      return "Buzz";
    }
    else {
      return number;
    }
  }

  isDivisibleBy5(number) {
    if (number % 5 === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isDivisibleBy3(number){
     if (number % 3 == 0){
       return true;
      }
     else{
       return false;
      }
  }
}