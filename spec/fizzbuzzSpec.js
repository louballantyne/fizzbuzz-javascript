describe('fizzbuzz', function() {
  var fizzbuzz = new Fizzbuzz();

  describe('printing the numbers', function() {
    it('prints out numbers other than multiples of 3 or 5', function(){
      expect(fizzbuzz.output(1)).toEqual(1);
      }); 
    });

  describe('prints out Fizz', function() {
    it('for multiples of three', function() {
      expect(fizzbuzz.output(3)).toEqual('Fizz');
    });
  });

  describe('prints out Buzz', function() {
      it('for multiples of five', function() {
        expect(fizzbuzz.output(5)).toEqual('Buzz');
      });
  });

  describe('prints out FizzBuzz', function() {
    it('for numbers that are multiples of both 3 and 5', function() {
      expect(fizzbuzz.output(15)).toEqual('FizzBuzz');
    });
  });
});