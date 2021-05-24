export default function Layout({ children }) {
  return (
    <>
      <header>
        <img src="/logo.png" alt="stencil of my headshot" />
        <h1>Botham City Blog</h1>
        <nav>
          <a href="/">Contact</a>
          <a href="/">Home</a>
          <a href="/">About</a>
        </nav>
      </header>
      <main className="layout">{children}</main>
      <footer>my foot(er) goes down here!</footer>
    </>
  );
}
