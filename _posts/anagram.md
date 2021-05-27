---
title: Anagram (Frequency Counter Algorithm)
excerpt: This post demonstrates a practical example of using a frequency counter. In it I go over how to determine if two strings are anagrams by counting the number and value of characters in each string.
date: 05/24/2021
---

> Given two strings, write a function to determine if the second string is an anagram of the first.

## Problem Solving Stragey

1. State the problem in my own words

Do the the two strings contain the same characters and same number of characters?

2. What are some concrete examples?

```
    countChars('benben', 'ebnebn') // true
    countChars('alt', 'tta') // false
    countChars('bothamhiggin', 'higginmahtob') // true
```

3. Break down the problem into simple, small steps

```
    // are the strings the same size?
    // create objects to store the characters and their counts of both strings
    // loop over strings to count their characters
    // loop over one of object and compare its values with the values of the other object
```

4. Solve the problem

```
function countChars(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const count1 = {};
  const count2 = {};

  for (char in str1) {
    let character = str1[char];
    if (!count1[character]) {
      count1[character] = 1;
    } else {
      count1[character]++;
    }
  }
  for (char in str2) {
    let character = str2[char];
    if (!count2[character]) {
      count2[character] = 1;
    } else {
      count2[character]++;
    }
  }

  for (key in count1) {
    if (!count2[key]) {
      return false;
    }
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}
```

What's going here? First the function determines if both strings are the same length. If one string has more characters than the other then they aren't anagrams. Next the function creates two objects that will be filled in the next step. The third step loops over both strings and fills the two objects with key/value pairs. With each iteration the function determines if there is already a key/value pair associated with the character being looked at. If there isn't, then it creates a key with that character and set its value to 1. If there is, then it increments the value of the key. The final step involves looping over the first object and comparing its key/value pairs with those of the second object. This is done in two steps. First the function determines if there is a similar key in the second object. Second it determines if the values at the similar keys are the same, i.e. the characters occur the same number of times. If we've made it this far, then the two strings are anagrams and function returns true.

5. Review and revise the solution. Can it be more effecient or written in a different way?

First things first. The solution works! That's what's most important. And it's time complexity is O(n) becuase as the size of the strings increases, the number of iterations in each loop increases linearly. That's a fairly effecient solution. But, it could be written differently to reduce the lines of code. In each loop I use an if/else statement. Thankfully JavaScript syntax allows for me to write the same logic on one line of code.

Here's what that looks like:

```
  for (char in str1) {
    let character = str1[char];
    count1[character] ? (count1[character] += 1) : (count1[character] = 1);
  }
  for (char in str2) {
    let character = str2[char];
    count2[character] ? (count2[character] += 1) : (count2[character] = 1);
  }
```
