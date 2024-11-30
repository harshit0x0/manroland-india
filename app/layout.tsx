import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterExtension from '@/components/FooterExtension';

export const metadata = {
  title: 'Manroland India',
  description: 'Pioneering Printing Excellence in India',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/cc0e184fdf.js" crossOrigin='anonymous'></script>
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="m-0 w-full">{children}</main>
        <FooterExtension />
        <Footer />
      </body>
    </html>
  );
}
