import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <footer>
        <nav>
          <a href="/">Home</a>
          <a href="#">Top of Page</a>
          <a href="/about">About</a>
        </nav>
        <p>&copy;Botham.City Blog</p>
      </footer>
    </>
  );
}
