import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'RafDev Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="site-wrapper">
        <Navbar />
        <div className="site-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}