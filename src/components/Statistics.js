export default function Statistics({ title = true, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title && 'Upload stats'}</h2>
    </section>
  );
}
