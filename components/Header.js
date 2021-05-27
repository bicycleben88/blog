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
        <span onClick={displaySubheader}>Contact</span>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <div className="sub-header flex">
        <a href="https://higginbotham.fun">Portfolio</a>
        <a href="https://www.linkedin.com/in/benjamin-alt-higginbotham/">
          Linked<span style={{ color: "blue" }}>in</span>
        </a>
        <a href="mailto:bicycleben88@gmail.com">bicycleben88@gmail.com</a>
      </div>
    </header>
  );
}
