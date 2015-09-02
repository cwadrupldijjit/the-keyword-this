// extra example
var sam = {
  name: "Sam",
  age: 5,
  introduceMe: function (animal) {
    alert("My name is "+ this.name + " and I am " + this.age + " and my current favorite animal is " + animal + ".");
  }
};

var jim = {
  name: "Jim",
  age: 7
};

// sam.introduceMe("tiger");
// sam.introduceMe.apply(jim, ["lion"]);

//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //   "this" usually refers to the object to bind elements to an object or refer to elements in the object while in context of the object, usually in context of a constructor function.  It is in order to remove ambiguity about if you are referring to another variable or object other than the one you're creating.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //    1. implicit = implied, anything on the left of the period
      //    2. explicit = outright telling what "this" refers to (using bind, call, or apply methods)
      //    3. default = binding to the window object if there is no other holding object
      //    4. new = binding the properties found in a constructor function to a new object

  // 3) What is the difference between call and apply?

      //Answer
      //    They behave similarly, in pulling a method form one object but executing it in the context of a different object.  If you use "call()", you first specify the object you're applying it to, then list the parameters afterward as needed, separated by commas.  If you use "apply()", you first specify the object you're applying the context from, but then pass the parameters into the affected function in an array in the order specified in the function.

  // 4) What does .bind do?

      //Answer
      //    .bind binds a method of an object to another variable and uses "this" in the context of the object where the method is from.  You first have to specify the object that you're pulling it from (or in the case of functions outside of an object, you pass in "null"), and then list any parameters if the function requires it. 


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*
              // var user = {
              //   username: "cwadrupldijjit",
              //   email: "cwadrupldijjit@gmail.com",
              //   getUsername: function() {
              //     return this.username;
              //   }
              // }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
//console.log(user.getUsername());


// Write the function definitions which will make the following function invocations function properly.
var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
};

Car.prototype.moveCar = function() {
  this.move += 10;
  
  return this.move;
};

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

// prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
// mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.
// getYear.call(prius);
// getYear.call(mustang);



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

//setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  //    undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //    the window object

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
// done