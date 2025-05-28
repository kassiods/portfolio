
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, XIcon } from 'lucide-react';

const navItems = [
  { label: 'Sobre Mim', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" legacyBehavior passHref>
            <a className="text-3xl font-bold text-primary hover:text-accent transition-colors">
              It&apos;s me Kassio
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} legacyBehavior passHref>
                <a className="text-foreground hover:text-primary transition-colors font-medium">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6 text-primary" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-md p-6">
                <div className="flex justify-between items-center mb-8">
                   <Link href="/" legacyBehavior passHref>
                    <a className="text-2xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      It&apos;s me Kassio
                    </a>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <XIcon className="h-6 w-6 text-primary" />
                    <span className="sr-only">Fechar menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href} legacyBehavior passHref>
                      <a
                        className="text-lg text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
