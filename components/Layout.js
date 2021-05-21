export default function Layout({ children }) {
  return (
    <>
      <header>I'm a header</header>
      <body>{children}</body>
      <footer>my foot(er) goes down here!</footer>
    </>
  );
}
