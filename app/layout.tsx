import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

export const metadata: Metadata = {
  title: 'ByteSpace — Learn, create, grow',
  description: 'ByteSpace course marketplace assessment built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-pt-[112px] [color-scheme:light] motion-safe:scroll-smooth`}
    >
      <body className="min-w-[320px] overflow-x-clip bg-white font-sans text-byteink antialiased selection:bg-bytelime selection:text-[#111]">
        {children}
      </body>
    </html>
  );
}
