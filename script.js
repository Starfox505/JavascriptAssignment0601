// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  //This calls a new function reliable Multiply with values a and b, similar to primitive multiply.
  while (true) {
    //This while statement says that while the statement is true than proceed.
    try {
      //This is a try statement for the reliable multiply. This is the line of code we are testing.
      return primitiveMultiply(a, b);
      //This means it will return primitive multiply's values of a and b.
    } catch (exception) {
      //This will catch the errors and any exceptions.
      if (!(exception instanceof MultiplicatorUnitFailure)) {
        //This if statement starts with an exclamation point, which means it negates the exception of the instance of Multiplactor Unit Failure from showing up in the console log.
        throw exception;
        //This means it will throw the exception if the line of code does not come back with the correct or try statement.
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
//This logs the answer, and gives the a and b values both a numeric value of 8 for both the reliable multiply and primitive multiply, as the primitive multiply is wrapped in the reliable multiply.
