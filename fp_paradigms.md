---
class: invert
paginate: true
theme: default
---

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
-->

---

# **Fun**ctional Programming Paradigms

By: Patrick `java.lang.IndexOutOfBoundsException`

<!--
* Hi, I'm Patrick java dot lang dot index out of bounds exception, and I'm here to put the fun back into functional programming paradigms
* Actually, the fun was always there, I'm just pointing it out

* Now this talk comes with a disclaimer. There are some really hardcore functional programming nerds out there
* So while I've tried to do as much research into this workshop as I can, I may get some of the details wrong.
* If this happens, I apologise, but it shouldn't impact the key takeaways for today.

* So, with my bulletproof disclaimer out of the way, let's get into it
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
* First of all, for those of you who don't know what functional programming is, let's define it
* You're probably very familiar with a couple of paradigms already: object oriented programming, procedural programming.
* Functional programming is another way to program. It's got its own features, and languages that work well with it.

* There's some bad news though: functional programming is rooted in a branch of mathematics called lambda calculus, which looks like this

* I wouldn't bother looking into the equations on the screen too much because first of all we don't care about the mathematical syntax, and second of all I wrote it so it's probably wrong
* Don't worry, I won't flash mathematics at you again
* It's too late to go to a different workshop - you're stuck with me

* I think it's good to be aware that there is some very pure maths underpinning functional programming
* And to point out that there is more to learn here if you're curious

* Today, however, we're going to be looking at how we can apply functional programming paradigms to our everyday work
* So let's talk about programming languages for one slide
-->

---

<!-- prettier-ignore -->
* Functional Programming Languages
  ![](images/fp-languages.svg)
* Multi-Paradigm Languages 
  ![](images/mp-languages.svg)

<!--
* There are languages out there that are basically "functional-first" languages. Some are more pure than others
* Up here we've got haskell, ocaml, and clojure which are all popular... for a functional programming language

* But just because we're not using one of these languages donsn't mean we can't take advantage of functional programming features
* Pretty much all of the languages we use have functional "inspired" features, even though they're not functional programming languages

* We call this multi-paradigm, and the reason it's so common is that it lets you program in the way that you want
* So let's take a look at some features that come from functional programming, and figure out why and where we can use them.
-->

---

## Functions as First-Class Citizens

- Get to pass functions around!
- `Function<T,V>` and `@FunctionalInterface` in Java
- Lambdas in python (10/10 naming)
- Arrow functions in JavaScript (3/10 naming)

```ts
const func1 = (x) => x === `Hello, ${x}`;
const func2 = (x) => x === `Hey, ${x}!`;

const chosenFunc = isOdd(31) ? func1 : func2;

const greeting = chosenFunc("World?");

console.log(greeting); // Hello, World?
```

<!--
First up, we have the cornerstone of functional programming, which that we're able to treat functions like data.
This means passing them around, assigning them to variables, and defining their types.
Basically anything you can do with data, you can also do with a function.

* So I've got an example here that uses my favourite npm package `isOdd` that to this day gets over two hundred thousand downloads a week
* Now most examples here will be in javascript since it has less boilerplate than Java, and has more approachable syntax than python, but all of these languages can do the same tricks I'm showing here.

* Walk through the example

This leads directly into the next feature, higher order functions.
-->

---

## Higher-Order Functions

Functions that take other functions, or return functions

```ts
function generateFunc(oddOrEven: "odd" | "even"): (input: number) => boolean {
  if (oddOrEven === "odd") {
    return (n) => n % 2 === 1;
  } else {
    return (n) => n % 2 === 0;
  }
}

const isOdd = generateFunc("odd");
const isTenOdd = isOdd(10); // false
// or
const isTenEven = generateFunc("even")(10); // true
```

<!--
* For those following along with the lambda calculus, this last line is an example of "currying" I would also recommend you STOP FOLLOWING ALONG WITH THE LAMBDA CALCULUS

* Walk through the example
  * Here we've got a replacement for the isOdd library, that lets us generate either an odd check, or an even check

* Higher-order functions are the first thing that I'm going to say you PROBABLY don't want to be using much. For a really specific reason
* If we take a closer look at this example, we could claim that the isOdd function actually holds some state, and that state is the fact that it was instantiated with the string "odd".
* Here's a better example of that happening.
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
Much like the last slide, we have a function that returns another function, and we're generating a function with a particular string.
But here it's clear that the string "Good evening" is somehow remembered by greetFunc - it's a function with associated data.

If that sounds familiar, it's because it's very similar to objects on object-oriented programming.
* In OOP you have state, with some associated functions
* Here, we have a function, with some associated state

So, the reason I don't think you should be using higher-order functions much is because it usually solves the same problem as an object - except your coworker has no idea what you're doing anymore.

Of course, in those more "pure functional" languages from before, you don't have objects, so this is just how you associate state and functions.

There is one other difference that I'm going to mention, because it segues directly into the next feature: immutability.
There is no way (as I've written this example) to change the greeting prefix.
And I'm about to argue that this is a good thing.
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
