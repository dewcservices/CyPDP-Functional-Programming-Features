---
class: invert
paginate: true
theme: default
---

<style>
  p:has(> img,svg) {
    max-height: 60%;
    display: block;
  }
  img,svg {
    display: block;
    margin: auto;
    max-height: 100%;
  }
</style>

```java
public class Main {

  /** Returns the first string in the array with the provided prefix. Also trims the prefix. */
  private static String getFromPrefix(ArrayList<String> names, String prefix) {

    // Iterate backwards since we are filtering items out and changing their positions
    for(int i = names.size() - 1; i >= 0; i--) {
      // Filter our all non-prefix strings
      if(!names.get(i).startsWith(prefix)) {
        names.remove(i);
      }
    }

    // List only contains items with prefix - return the first one, and trim the prefix
    return names.get(0).substring(prefix.length());
  }

  public static void main(String[] args) {
    final ArrayList<String> names = new ArrayList(List.of(
        "first:Patrick",
        "last:Gregory"
    ));

    System.out.println(Main.getFromPrefix(names, "first:"));
    System.out.println(Main.getFromPrefix(names, "last:")); // Throws IndexOutOfBoundsException!
  }
}
```

<!--
* A rather annoying bug
* For bonus points - what happens if we swap those last two lines, and called "first:" after "last:" instead of before?
* Let's walk through it, and understand why I don't like it
-->

---

# **Fun**ctional Programming Features

By: Patrick `java.lang.IndexOutOfBoundsException`

<!--
* Hi, I'm Patrick java dot lang dot index out of bounds exception, and I'm here to put the fun back into functional programming
* Actually, the fun was always there, I'm just pointing it out

* Functional programming is a "paradigm", so let's start by understanding what on earth a programming paradigm is
-->

---

# What is a programming paradigm?

<!--
Audience participation! - Answer the question on the screen.

Let's see a couple of ways to write code, and figure it out.
-->

---

```ts
type User = {
  firstName: string;
  lastName: string;
};

function getFullName(user: User) {
  return user.firstName + " " + user.lastName;
}

const user: User = {
  firstName: "Patrick",
  lastName: "Gregory",
};

console.log(getFullName(user)); // Patrick Gregory
```

<!--
This is procedural programming. Really the OG of programming paradigms.

You're probably familiar with another paradigm - OOP.
-->

---

```ts
class User {
  firstName: string;
  lastName: string;

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("Patrick", "Gregory");

console.log(user.getFullName()); // Patrick Gregory
```

<!--
This does the same thing as the previous code

But instead, we are using a class, so we can associate state and functions.
-->

---

## Imperative Paradigms

> Give the computer _instructions_

- Procedural
- Object Oriented Programming (OOP)

<!--
Much like a recipe

Imperative is a group of paradigms. Functional programming falls in a different group.
-->

---

## Declarative Paradigms

> Describe _what_ to do, not _how_ to do it

- Reactive
- **_Functional_**

<!--
Describe what we are trying to achieve.

Keep in mind that machine code is procedural, so we are just abstracting away.
But ultimately, it's all reduced down in the end.

The idea is that: if we already know how to loop over a list, why do we have to
re-implement it every time? Just say: "loop over this list", and let existing
code do the trick.
-->

---

<!-- prettier-ignore -->
* Functional Programming Languages
  ![](images/fp-languages.svg)
* Multi-Paradigm Languages 
  ![](images/mp-languages.svg)

<!--
Functional-first languages exist. See the screen for some examples.
(haskell, ocaml, closure - built on the JVM).

But we can still leverage functional features in our favourite languages, because they're multi-paradigm.

Multi-paradigm == let the user decide how they want to write code.

We know where functional programming fits in, but we haven't really covered what it IS.
-->

---

```c
#ifndef FUNCTIONAL_PROGRAMMING
#define FUNCTIONAL_PROGRAMMING
```

<!-- prettier-ignore -->
* Based on **_lambda calculus_** 😱
  $$
  (f(x) = x^2) \equiv
  \lambda x.x^2
  $$
  $$
  (f(x,y) = x^2+y) \equiv
  \lambda xy.x^2+y \equiv
  \lambda x.(\lambda y.x^2+y)
  $$
* It's too late to go to a different workshop now

<!--
Let's define functional programming.

Functional programming is rooted in a branch of mathematics called lambda calculus, which looks like this

I think it's good to be aware that there is some very pure maths underpinning functional programming

Today, however, we're just going to be looking at how we can apply functional programming features to our everyday work
-->

---

# Shotgun Buffet

![Shotgun Buffet](images/shotgun-buffet.png)

<!--
Using an idea ripped directly from this excellent talk, this workshop will be a shotgun buffet style

Meaning we'll be looking at a lot of features, and you can choose which ones you want to use
-->

---

# Lambdas

- Python `lambda foo: foo + 1`
- JS `(foo) => foo + 1`
- Java `(foo: Integer) -> foo + 1`
- Rust `|foo| foo + 1`

<!--
Feature no. 1 is lambdas - owing to the lambda calculus that FP is based on

Basically just anonymous functions.

Code example: 03-lambdas.ts

Code example: 04-lambdas-2
-->

---

## Closures

- Lambdas are anonymous functions
- Closures "close over" their environment

<!--
Closures are a subset of lambdas, in that they can use variables not defined in their scope.
These variables are "captured"
-->

---

# Functions as First-Class Citizens

> Treat functions like any other data

![First-Class Citizen](images/first-class-citizen.png)

<!--
This means passing them around, assigning them to variables, and defining their types.

Basically anything you can do with data, you can also do with a function.

Code example: 05-fn-first-class.ts

This leads directly into the next feature, higher order functions.
-->

---

## Higher-Order Functions

> Functions that take other functions, or return functions

<!--
Since we can assign functions to variables, it follows that we can pass them into and return them from other functions.

This is where things can start to get a little "inception"-y, so use it with caution.

Code example: 06-higher-order.ts
-->

---

State in a function?

```ts
// Returns a function
function generateGreeting(greetingPrefix: string): (name: string) => string {
  return (name) => `Here is your greeting: "${greetingPrefix}, ${name}"`;
}

const greetFunc = generateGreeting("Good evening");

// From this point, the string "Good evening" is part of the "greetFunc" function's state
const patrickGreeting = greetFunc("Patrick");
console.log(patrickGreeting); // Here is your greeting: "Good evening, Patrick"
```

<!--
Here's a slightly different example

Much like before, we have a function that returns another function, and we're generating a function with a particular string.
But here it's clear that the string "Good evening" is somehow remembered by greetFunc - it's a function with associated data.

If that sounds familiar, it's because it's very similar to objects on object-oriented programming.
* In OOP you have state, with some associated functions
* Here, we have a function, with some associated state

And we can actually take this to an extreme
-->

---

```ts
type User = {
  getFirstName: () => string;
  setFirstName: (n: string) => void;
  greet: (prefix: string) => string;
};

function newUser(firstName: string): User {
  let fn = firstName;

  const getFirstName = () => fn;

  const setFirstName = (name: string) => (fn = name);

  const greet = (prefix: string) => `${prefix}, ${getFirstName()}.`;

  return {
    getFirstName,
    setFirstName,
    greet,
  };
}

const user: User = newUser("John");

console.log(user.greet("Good evening")); // Good evening, John.

user.setFirstName("Stacy");

console.log(user.greet("Hello")); // Hello, Stacy.
```

<!--
Please never code like this.

Not something to really study - this is just showing how we can do OOP with only functional programming
-->

---

## Immutability

<!--

-->

---

## Pure Functions

---

## Typing

---

## Monads

---

## Higher-Order Functions

---

## Terrifying Mathematics

---

# Functional Programming

At least, for us for now.

- Functions as First-Class Citizens
- Pure Functions
- Typing
- Monads
- Higher-Order Functions
- Terrifying Mathematics

```c
#endif
```

<!--
Immutability is awesome
Pure functions mean no side-effects, deterministic, and non mutating!
Monads start to get confusing, but are quite useful
Uh-oh we seem to be implementing OOP with functions instead of objects?
Oh dear there's a lot of maths here, and you can easily end up in completely theoretical territory, and have functional code that does nothing.
-->

---

### Pulling it Back to the Real World

<!--
Side-effects are the actual purpose of our programs.
-->

## asdf
