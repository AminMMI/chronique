import './globals.css';
import Navbar from '../components/navbar';

export const metadata = {
  title: 'Chronique',
  description: 'Blog Fantasy Elden Ring',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
