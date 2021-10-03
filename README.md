# LSystem.js

A while ago I made an L-System generator titled "L.js". It worked fine, but wasn't the greatest. So, because I was bored, I made another (better) L-System generator. You should try it out! Or at least program your own.

## What is an L-System?

L-System is short for Lindenmayer System, and is commonly used for generating trees and other plants. It's a grammar that iterates over itself to "grow" like a plant.

It starts with an axiom/starting point like `"A"`, then uses rules such as `"A" -> "AB"` and `"B" -> "A"` to go through the axiom and create a new string based off of the rules. For example, with the beforementioned rules and axiom, you'd iterate like so:
```
A
AB
ABA
ABAAB
ABAABABA
...
```
As you can see, it replaces each letter with the letter(s) in the rules. That's pretty much it.

For more information, visit [the Wikipedia page](https://en.wikipedia.org/wiki/L-system).

## How to use

To use this generator (contained in the src.js file), you start with a config object that gets fed into the generator's `evolve` method. For example:
```javascript
var axiom = LSystem.evolve({
    axiom: "A",
    
    iterations: 4,
    
    rules: {
        "A": "AB",
        "B": "A",
    }
});
```
would iterate our example to the fourth iteration, `ABAABABAABAAB`

After you have your axiom, you can iterate through it with the generator's `iterate` method like so:
```javascript
LSystem.iterate({
    axiom: axiom, // (The axiom variable from earlier)
    
    commands: {
        "A": function(){
            // do something if there's an "A"
        
            console.log("A");
        },
        "B": function(){
            // do something if there's a "B"
        
            console.log("B");
        },
    }
});
```

using CTX, you can create images that look like trees by changing the rules and axiom:
![tree](https://user-images.githubusercontent.com/73145304/135742154-32cd08fc-0192-4aa4-9c69-14a5b1509317.png)

Enjoy!

