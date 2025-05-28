
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleEmailClick = () => {
    toast({
      title: "Abrindo cliente de e-mail",
      description: "Seu cliente de e-mail padrão será aberto para enviar uma mensagem.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary animate-fadeInLoad">Entre em Contato</h2>
        <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto animate-fadeInLoad" style={{ animationDelay: "0.2s" }}>
          Estou sempre aberto a novas oportunidades, colaborações e um bom bate-papo sobre tecnologia. 
          Sinta-se à vontade para me contatar através das minhas redes sociais ou por e-mail.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 animate-fadeInLoad" style={{ animationDelay: "0.4s" }}>
          <Link href="https://www.linkedin.com/in/kassiodias" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <LinkedinIcon className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </a>
          </Link>
          <Link href="https://github.com/kassiods" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <GithubIcon className="mr-2 h-5 w-5" /> GitHub
              </Button>
            </a>
          </Link>
          <Link href="https://www.instagram.com/kassio.ds/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <InstagramIcon className="mr-2 h-5 w-5" /> Instagram
              </Button>
            </a>
          </Link>
          <Link href="mailto:kassiodesousadias@gmail.com" passHref legacyBehavior>
             <a target="_blank" rel="noopener noreferrer" onClick={handleEmailClick}>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <MailIcon className="mr-2 h-5 w-5" /> Email
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
