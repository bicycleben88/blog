/*** @jest-environment jsdom */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "../components/Card";

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

  expect(container.querySelector("h2").textContent).toBe(fakePost.title);
  expect(container.querySelector("p").textContent).toBe(fakePost.excerpt);
  expect(container.querySelector("small").textContent).toBe(fakePost.date);

  global.fetch.mockRestore();
  global.fetch.mockClear(); // fetch work around
  delete global.fetch; // fetch work around
});
