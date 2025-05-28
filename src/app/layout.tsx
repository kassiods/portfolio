import type {Metadata} from 'next';
import { Inter, Roboto_Mono } from 'next/font/google'; // Changed from Geist
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const interFont = Inter({ // Changed to Inter & renamed instance
  subsets: ['latin'],
  variable: '--font-sans', // Using a more standard variable name
});

const robotoMonoFont = Roboto_Mono({ // Changed to Roboto_Mono & renamed instance
  subsets: ['latin'],
  variable: '--font-mono', // Using a more standard variable name
});

export const metadata: Metadata = {
  title: 'KassioDev Portfolio',
  description: 'Portfolio of Kassio, a 17-year-old Full Stack Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${interFont.variable} ${robotoMonoFont.variable} scroll-smooth`}>
      <body className={`antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
