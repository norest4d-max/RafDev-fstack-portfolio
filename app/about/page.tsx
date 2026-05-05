export const metadata = {
  title: 'About Me | RafDev',
  description: 'Learn about Rafael – Full Stack Developer',
};

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL / MongoDB'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git / GitHub', 'Vercel', 'Docker (basics)', 'VS Code', 'Postman'],
  },
];

export default function AboutPage() {
  return (
    <main className="page">
      <section className="about-hero">
        <h1 className="page__title">About Me</h1>
        <p className="page__subtitle">
          Hey, I&apos;m <strong>Rafael</strong> — a Full Stack Developer who loves building
          fast, clean, and user-friendly web applications. I enjoy working across the entire
          stack, from pixel-perfect UIs to scalable back-end services.
        </p>
      </section>

      <section className="skills">
        <h2 className="skills__heading">Full Stack Knowledge</h2>
        <div className="skills__grid">
          {skills.map(({ category, items }) => (
            <div key={category} className="skills__card">
              <h3 className="skills__category">{category}</h3>
              <ul className="skills__list">
                {items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
