---
title: "Testing a React Component"
excerpt: "I'm going to use Jest to test a React component"
date: "06/03/2021"
---

## Why am I testing a React component?

---

The right answer: I'm a software developer & I get paid to learn new things. I've never ran a test with any of my React projects and I think this is a good opportunity to learn something new.

The straight answer: I'm _not actually getting paid yet_ & a lot of job listings ask for experience with testing.

## How am I going to write the test?

---

Like most things I learn, I'm going to start with Google.

"write test javascript". The result: Jest. What's that?

"[Jest](https://jestjs.io) is a delightful JavaScript Testing Framework with a focus on simplicity."

\- jestjs.io

Okay. Now I know what I'm going to use to write my test, but how do I write a test for a React component? Enter [React's docs](https://reactjs.org/docs/testing.html) explaining how to do just that!

I have a tool and a recipe to write my test, but it won't be any fun to use the examples from their docs. So, I'm going to go off script a little bit and test a component from this very blog. On the home page, I display a card that contains the metadata for each post. I'm going to write a test that sends a fake post to my \<Card> component and check that it displays the title, excerpt & date of the post.

## Writing the test Part I

---

1. Install Jest

```
npm install --save-dev jest
```

2. Download Babel packages

```
npm install
    @babel/core
    @babel/plugin-transform-runtime
    @babel/preset-env
    @babel/preset-flow
    @babel/preset-react
    babel-jest
```

3. Create a file called babel.config.js in the root of the directory

```
module.exports = function (api) {
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-flow",
  ];
  const plugins = ["@babel/plugin-transform-runtime"];

  api.cache(false);

  return {
    presets,
    plugins,
  };
};
```

## Writing the test Part II

---

With Jest installed and Babel configured, it's time to create a new file which will contain the test. I'm calling it card.test.js & putting in a directory called tests.

1. At the very top of the file add the follow pseudocode to tell Jest to use the testing envirnonment jsdom

```
/*** @jest-environment jsdom */
```

2. Import the dependencies

```
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "../components/Card";
```

3. Create a dummy element that attaches to the DOM and will be used to render the \<Card>. Then, use beforeEach() & afterEach() to isolate the effects of the test.

```
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
```

4. Create the it() block.

The it() block will contain the component and the post I'm sending to it, and it will tell my test what the component should look like. This blog uses an async function built into Next called getStaticProps(). To mimic this feature in my test I'm going to use an async function that includes the fake post and makes a mock fetch request. Then, I use await act() to render the \<Card> and pass down the fake post as props.

```
it("renders post metadata onto card", async () => {
  const fakePost = {
    title: "I am a title",
    excerpt: "This is an excerpt for this post",
    date: "06/06/06",
  };
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise); // fetch work around
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePost),
    })
  );

  await act(async () => {
    render(<Card post={fakePost} />, container);
  });
...
```

Now that the component has a been rendered, I need to tell Jest what it's supposed to look like. I use expect() to do this by looking at the text content of each DOM element in the component.

The last thing I'll do is clear the mock fetch request.

```
...
  expect(container.querySelector("h2").textContent).toBe(fakePost.title);
  expect(container.querySelector("p").textContent).toBe(fakePost.excerpt);
  expect(container.querySelector("small").textContent).toBe(fakePost.date);

  global.fetch.mockRestore();
  global.fetch.mockClear(); // fetch work around
  delete global.fetch; // fetch work around
});
```

5. Run the test!

```
npm run test
```

![screenshot of test](/jest-test.png)

### Notes & Resources

[Free Code Camp: What is Software Testing? The 10 Most Common Types of Tests Developers Use in Projects](https://www.freecodecamp.org/news/types-of-software-testing/)

[Free Code Camp: Unit Testing Explained](https://www.freecodecamp.org/news/unit-tests-explained/)

[Free Code Camp: Software QA Guide](https://www.freecodecamp.org/news/software-quality-assurance-guide/)

[Security Boulevard: Application Security Testing Trends 2020](https://securityboulevard.com/2020/03/application-security-testing-trends-in-2020/)

[Medium: Mocking and testing fetch with Jest](https://rishabhsrao.medium.com/mocking-and-testing-fetch-with-jest-c4d670e2e167)
