import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <footer>my foot(er) goes down here!</footer>
    </>
  );
}
