import Image from 'next/image';

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

const foods = [
  {
    name: 'Pizza',
    description: 'Classic, loaded, always a win. Thick crust, perfect cheese pull.',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80',
    alt: 'Delicious pizza with melted cheese',
  },
  {
    name: 'Gourmet Burgers',
    description: 'Stacked high, juicy patty, brioche bun — the real deal.',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80',
    alt: 'Gourmet burger stacked with toppings',
  },
];

const games = [
  {
    title: 'Borderlands 2',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg',
    alt: 'Borderlands 2 cover art',
  },
  {
    title: 'Borderlands 3',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg',
    alt: 'Borderlands 3 cover art',
  },
  {
    title: 'Resident Evil 7',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/418370/header.jpg',
    alt: 'Resident Evil 7 cover art',
  },
  {
    title: 'Resident Evil Village',
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg',
    alt: 'Resident Evil Village cover art',
  },
];

export default function AboutPage() {
  return (
    <main className="page">
      {/* Bio */}
      <section className="about-hero">
        <h1 className="page__title">About Me</h1>
        <p className="page__subtitle">
          Hey, I&apos;m <strong>Rafael</strong> — a Full Stack Developer who loves building
          fast, clean, and user-friendly web applications. I enjoy working across the entire
          stack, from pixel-perfect UIs to scalable back-end services.
        </p>
      </section>

      {/* Skills */}
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

      {/* Favorite Food */}
      <section className="about-section">
        <h2 className="about-section__heading">Favorite Fast Food</h2>
        <div className="food-grid">
          {foods.map(({ name, description, img, alt }) => (
            <div key={name} className="food-card">
              <div className="food-card__img-wrap">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 680px) 100vw, 50vw"
                  className="food-card__img"
                  unoptimized
                />
              </div>
              <div className="food-card__body">
                <h3 className="food-card__name">{name}</h3>
                <p className="food-card__desc">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Video Games */}
      <section className="about-section">
        <h2 className="about-section__heading">Favorite Video Games</h2>
        <div className="games-grid">
          {games.map(({ title, img, alt }) => (
            <div key={title} className="game-card">
              <div className="game-card__img-wrap">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 680px) 100vw, 25vw"
                  className="game-card__img"
                  unoptimized
                />
              </div>
              <p className="game-card__title">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
