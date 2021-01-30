---
title: "What's a Method in JavaScript?"
description: "A method is a function that belongs to an object and executed with that object as a context."
published: "2021-02-02T12:00Z"
modified: "2021-02-02T12:00Z"
thumbnail: "./images/cover-2.png"
slug: javascript-method
tags: ['javascript', 'function', 'method']
recommended: ['6-ways-to-declare-javascript-functions', 'javascript-arrow-functions']
type: post
---

## 1. What is a method

In JavaScript here's how you can define a regular function:

```javascript
function greet(who) {
  return `Hello, ${who}!`;
}

greet('World'); // => 'Hello, World!'
```

To *define* the function write the `function` keyword followed by its name, params and body: `function greet(who) {...}`.  

Then, to *invoke* it, write the function name followed by the arguments: `greet('World')`.  

You can see that the function `greet(who)` accepts data about who to greet from the argument. What if the `who` is a property of an object?  

You can access the `who` property from the object inside of a method:

```javascript{4-6}
const world = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  }
}

world.greet(); // => 'Hello, World!'
```

`greet() { ... }` is now a *method definition*, because it belongs to the `world` object. 

Inside of the method `this` points to the object the method belongs to &mdash; `world`. That's why `this.who` expression access the property `who`.  

Note that `this` is also named *context*.  

Finally, `world.greet()` is a *method invocation*: write the object followed by a dot and the method call.  

### The context is optional

While in the previous example you use `this` to access the object the method belongs to &mdash; JavaScript, however, doesn't impose a method to use the context.  

For this reason you can use an object as a namespace of methods:

```javascript
const namespace = {
  greet(who) {
    return `Hello, ${who}!`;
  }

  farewell(who) {
    return `Good bye, ${who}!`;
  }
}

namespace.greet('World');    // => 'Hello, World!'
namespace.farewell('World'); // => 'Good bye, World!'
```

`namespace` is an object that holds 2 method: `namespace.greet()` and `namespace.farewell()`. 

The methods do not use `this` to access any of the object properties. `namespace` just servers as a namespace of methods.  

## 2. Object literal method

As seen in the previous chapter, you can define a method directly in an object literal:

```javascript{4-6}
const world = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  }
};

world.greet(); // => 'Hello, World!'
```

`greet() { .... }` is a method defined on an object literal. Saying it stricter, this type of definition is named *shortand method definition* (available starting ES2015).  

Before ES2015 there was a longer syntax of how you can define methods:

```javascript{4-6}
const world = {
  who: 'World',

  greet: function() {
    return `Hello, ${this.who}!`;
  }
}

world.greet(); // => 'Hello, World!'
```

`greet: function() { ... }` is a *method definition*. Note the additional presence of a colon and `function` keyword. 

### Adding methods dynamically

## 3. Class method

In JavaScript the `class` syntax allows you to define a class that is going to serve as a template for the created instance.  

A class can also have methods, and you define method on a class using a shortand method definition:

```javascript{6-8}
class Greeter {
  constructor(who) {
    this.who = who;
  }

  greet() {
    return `Hello, ${this.who}!`;
  }
}

const myGreeter = new Greeter('World');
instance.greet(); // => 'Hello, World!' 
```

`greet() { ... }` is a method defined inside a class.  

Every time you create an instance of the class using `new` operator (e.g. `new Greeter('World')`) the defined method is available on the instance.  

`instance.greet()` is how you invoke the method `greet()` on the instance. What's important is that `this` inside of the method equals the instance itself.  

## 4. Method invocation

### 3.1 Regular method invocation

What's particularly interesting about JavaScript is that defining the method is half of the job. To maintain inside the method the context, you also have to make sure to invoke the method as a... method.  

Let me show you why it's important.  

Recall the `world` object having the method `greet()` upon it. Let's check what value has `this` when `greet()` is invoked as a method and as a regular function:

```javascript{5,11,15}
const world = {
  who: 'World',

  greet() {
    console.log(this === world);
    return `Hello, ${this.who}!`;
  }
};

// Method invocation
world.greet(); // logs true

const greetFunc = world.greet;
// Regular function invocation
greetFunc(); // => logs false
```

`world.greet()` is a method invocation. The object `world`, followed by a dot `.`, and finally the method itself &mdash; that's what makes the *method invocation*.  

`greetFunc` is the same function as `world.geet`. But when invoked as `greetFunc()` inside the function `this` isn't equal to the `world` object, but rather to the global object (in a browser this is window). It happens because `greetFunc()` is a *regular function invocation*.  

### 3.2 Indirect method invocation

As stated in the previous section, a regular function invocation has `this` resolved as the global object. Is there a way, still, having a function defined as a function, but not a method, but to specify the value of `this`?  

Welcome the indirect method invocation, which can be performed using:

```javascript
myFunc.call(thisArg, arg1, arg2, ..., argN);
myFunc.apply(thisArg, [arg1, arg2, ..., argN]);
```
 
methods available on the function object. 

The first argument of `myFunc.call(thiArg)` and `myFunc.apply(thisArg)` allows to specify the contenxt of the method invocation. In other words, you can manually indicate what value `this` is going to have inside the function.  

For example, let's define `greet()` as a regular function, and a bunch of objects having `who` property:

```javascript
function greet() {
  return `Hello, ${this.who}!`;
}

const aliens = {
  who: 'Aliens'
};

greet.call(aliens); // => 'Hello, Aliens!'
greet.apply(aliens); // => 'Hello, Aliens!'
```

`greet.call(aliens)` and `greet.apply(aliens)` are both indirect method invocations. `this` value inside the `greet()` function equal to `aliens` object.  

### 3.3 Bound method invocation

Finally, here's the third way how you can make a function be invoked as a method on an object. Specifically, you can bound a function to have a specific context.  

You can create a bound function 

## 4. Arrow functions as methods

## 5. Summary