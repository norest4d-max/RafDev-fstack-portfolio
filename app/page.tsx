import Link from 'next/link';

export default function Home() {
  return (
    <main className="page hero-page">
      <div className="hero">
        <h1 className="hero__title">Hi, I&apos;m Rafael</h1>
        <p className="hero__subtitle">
          Full Stack Developer building modern web apps with React, Next.js &amp; Node.js
        </p>
        <div className="hero__actions">
          <Link href="/about" className="btn btn--primary">
            About Me
          </Link>
          <Link href="/contact" className="btn btn--outline">
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}