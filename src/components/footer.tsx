import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 py-8 text-center">
      <div className="container mx-auto">
        <p className="text-foreground/70 mb-4 animate-fadeInLoad" style={{ animationDelay: "0.2s" }}>
          Kassio &copy; {new Date().getFullYear()} | Todos os direitos reservados
        </p>
        <div className="animate-fadeInLoad" style={{ animationDelay: "0.4s" }}>
          <Link href="/resume-kassio.pdf" passHref legacyBehavior>
            <a target="_blank" download="Curriculo-Kassio.pdf">
              <Button variant="ghost" className="text-accent hover:text-primary hover:bg-primary/10 transition-colors">
                <DownloadIcon className="mr-2 h-4 w-4" /> Baixar Currículo (PDF)
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
