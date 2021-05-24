---
title: Frequency Counter Algorithm
excerpt: In this post I dive into how to look at two arrays and determine if they have the same values and the same number of values, except in the values in the second array are squared.
date: 05/22/2021
---

> Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

---

## Problem Solving Strategy

1. Restate the problem in my own words

Compare the values and the frequency of values of two arrays. If the values of the second array are the squared values from the first array and they occur the same number of times in both arrays, then return true. Otherwise, return false.

2. What are some concrete examples for this problem? Consider user stories, unit tests & edge cases.

Simple example:

```
    same([1, 2, 4], [16, 1, 4]) // true
    same([1, 5], [25, 3]) // false
```

More complex example:

```
    same([2, 4, 4, 2, 5], [16, 25, 4, 4, 16]) // true
    same([1, 1, 1, 3, 4], [1, 1, 9, 16]) // false
```

Edge cases:

```
    same([3, 8, 2], []) // false
    same([3, 3, 4], [nine, nine, sixteen]) // false
```

3. Break down the problem into simple small steps

```
    function same(arr1, arr2) {
        // count the frequency of values in each array
        // square the values from the first array
        // compare the frequency of values of both arrays and the squared values of the first array with the values of the second array
    }
```

4. Solve or simplify the problem

```
    function same(arr1, arr2) {
        if (arr1.length) !== arr2.length {
            return false;
        }
        for(let i = 0; i < arr1.length; i++) {
            let correctIndex = arr2.indexOf(arr1[i] ** 2);
            if (correctIndex === -1) {
                return false;
            }
            arr2.splice(correctIndex, 1);
        }
        return true;
    }
```

The function first determines that the two arrays are the same length. If one array has more values than the other, the function returns false. Next it loops over the first array. With each iteration it determines if there is a value in the second array that matches the squared value of the first array. If there isn't, the function returns false. If there is, the function removes from the second array the value it has already looked at so it doesn't compare the same value twice. When the loop ends without returning false, the function returns true.

5. Review and refactor. What could make my code easier to read? What could reduce the time & space complexity of my solution?

The solution in step 4 works! And that's probably the most important thing. However, it's a good idea to review the code and look for ways to make it more efficient or easier to read. For instance, the solution I've given has a time complexity of O(n)^2 because of the nested loop. Can I solve this problem another way?

Let's try this:

```
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }
    for (let value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
```

So what's going on here? Like the solution in step 4, this function starts by determining if both arrays are the same size. Next it creates two empty objects that will be used in the next step. To fill each object with key/value pairs the function loops over each array one at a time. Finally, the function will do one more loop, this time over the first object created in the last step, and check for two thing: first, is there a key in the first object that matches a key from the second object when squared, and second, are the values of those matching keys the same, i.e. do they occur the same number of times? The function returns true after passing all of these steps.

Why might this be a better solution? Well, for one thing, it works! And that's the most important thing. However, its time complexity is O(n), making it much more efficient. Even though I solved this problem using a greater number of lines of code than I did in step 4, this solution doesn't have a nested loop, which exponentially increases the number of steps that must be run as the size of the arrays being looped over grows. Instead, it runs three separate loops which increase the number of steps that must be run linearly.
