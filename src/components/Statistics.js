export default function Statistics({ title = true, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title && 'Upload stats'}</h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
