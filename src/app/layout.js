import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Guia Completo do Shih Tzu - Manual 100% Interativo',
  description:
    'O primeiro manual interativo e offline para ser um bom tutor de Shih Tzu. Calculadora de ração, checklist diário e muito mais!',
  keywords:
    'shih tzu, cachorro, pet, manual, guia, cuidados, ração, treinamento',
  authors: [{ name: 'Guia Shih Tzu' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logodark.webp',
  },
  openGraph: {
    title: 'Guia Completo do Shih Tzu - Manual 100% Interativo',
    description:
      'O primeiro manual interativo e offline para ser um bom tutor de Shih Tzu',
    type: 'website',
    locale: 'pt_BR',
    images: ['/logodark.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logodark.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/logodark.webp" />
      </head>
      {/* suppressHydrationWarning: evita warning de hidratação quando extensões do navegador (ex: ColorZilla) injetam atributos como 'cz-shortcut-listen' antes do React hidratar */}
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
