import './globals.css';
import Navbar from '../components/navbar';
import ThemeProviderWrapper from '../components/ThemeProviderWrapper';

export const metadata = {
  title: 'Chronique',
  description: 'Blog Fantasy Elden Ring',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProviderWrapper>
          <Navbar />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
