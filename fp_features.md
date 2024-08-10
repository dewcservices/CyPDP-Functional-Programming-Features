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

---

# **Fun**ctional Programming Features

By: Patrick `java.lang.IndexOutOfBoundsException`

---

# What is a programming paradigm?

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

---

## Imperative Paradigms

> Give the computer _instructions_

- Procedural
- Object Oriented Programming (OOP)

---

## Declarative Paradigms

> Describe _what_ to do, not _how_ to do it

- **_Functional_**

---

<!-- prettier-ignore -->
* Functional Programming Languages
  ![](images/fp-languages.svg)
* Multi-Paradigm Languages 
  ![](images/mp-languages.svg)

---

```c
#ifndef FUNCTIONAL_PROGRAMMING
#define FUNCTIONAL_PROGRAMMING
```

- Based on **_lambda calculus_** 😱
  $$
  (f(x) = x^2) \equiv
  \lambda x.x^2
  $$
  $$
  (f(x,y) = x^2+y) \equiv
  \lambda xy.x^2+y \equiv
  \lambda x.(\lambda y.x^2+y)
  $$
- It's too late to go to a different workshop now

---

# Roadmap

- Functions as First-Class Citizens
- Lambdas
- Closures
- Higher-Order Functions
- Immutability
- Pure Functions
- Iterators
- Monads
- Implementing a Missing Feature

---

## Functions as First-Class Citizens

> Treat functions like any other data

![First-Class Citizen](images/first-class-citizen.png)

---

## Lambdas

> Anonymous Functions

- Python `lambda foo: foo + 1`
- JS `(foo) => foo + 1`
- Java `(foo: Integer) -> foo + 1`

---

## Closures

> "Close Over" Their Environment

---

## Higher-Order Functions

> Functions that take other functions, or return functions

_inception_bwaah.mp3_

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

// Usage is like OOP
const user: User = newUser("John");
console.log(user.greet("Good evening")); // Good evening, John.
user.setFirstName("Stacy");
console.log(user.greet("Hello")); // Hello, Stacy.
```

---

# Patterns

---

## Immutability

> Data doesn't change once assigned

---

## Pure Functions

> No side-effects

---

## Iterators / Iterables

> Like arrays, but more general

---

## Monads

> The boogeyman of functional programming

---

## The Missing Feature
