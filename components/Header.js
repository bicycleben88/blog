import React, { createRef } from "react";

export default function Header() {
  const headerRef = createRef();
  let header;

  React.useEffect(() => {
    header = headerRef.current;
  });

  function displaySubheader() {
    header.hasAttribute("display")
      ? header.removeAttribute("display")
      : header.setAttribute("display", "true");
  }

  return (
    <header ref={headerRef}>
      <img src="/logo.png" alt="stencil of my headshot" />
      <h1>Botham City Blog</h1>
      <nav>
        <small onClick={displaySubheader}>Contact</small>
        <a href="/">Home</a>
        <a href="/">About</a>
      </nav>
      <div className="sub-header flex">
        <a href="/">Contact</a>
        <a href="/">Home</a>
        <a href="/">About</a>
      </div>
    </header>
  );
}
