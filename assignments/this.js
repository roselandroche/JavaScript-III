/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If you don't intentionally bind 'this' to a thing, it will automatically be tied to the global window/console.

* 2. When using dot notation, 'this' refers to the object to the left of the dot.

* 3. When using 'this' with a constructor, it refers to the specific iteration you just made (as opposed to the one it inherits stuff from)

* 4. You can use 'this' to bind things (functions or properties) to an object prototype after the fact.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// This code hasn't been tied to anything, it will be tied to the window by default.
console.log(this);

// Principle 2

// code example for Implicit Binding
//
// In this example below 'this' refers to the person object

function Person(attr) {
    this.name = attr.name;
    console.log(`This is ${this.name}`);
}

// Principle 3

// code example for New Binding

// Here 'this' refers to the sarah object (it inherits statements with 'this' inside, which now refer to sarah)

const sarah = new Person({name: 'Sarah'}); 

// Principle 4

// code example for Explicit Binding

// Here 'this' is tied back to the object Person after it was originally created

Person.prototype.hello = function() {
    console.log(`Hello ${this.name}!`);
};