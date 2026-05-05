import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">RafDev &copy; {year}</p>

        <ul className="footer__links">
          <li>
            <Link href="/" className="footer__link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="footer__link">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/contact" className="footer__link">
              Contact Me
            </Link>
          </li>
        </ul>

        <p className="footer__tagline">Full Stack Developer &mdash; React &bull; Next.js &bull; Node.js</p>
      </div>
    </footer>
  );
}
