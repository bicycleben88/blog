export default function PostHeader({ title, date }) {
  return (
    <div>
      <h2>{title}</h2>
      <small>{date}</small>
    </div>
  );
}
