import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLoad" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-card border-primary/30 shadow-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary mb-2">Sobre Mim</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-foreground/90 space-y-4">
                <p>
                  Olá! Sou Kassio, um jovem de 17 anos apaixonado por tecnologia e desenvolvimento de software. 
                  Atualmente, estou cursando o último ano do ensino médio técnico em Informática no prestigioso 
                  Instituto Federal do Piauí (IFPI).
                </p>
                <p>
                  Como desenvolvedor full stack, busco constantemente aprender e aplicar novas tecnologias para criar 
                  soluções inteligentes e eficientes. Minha jornada na programação é movida pela curiosidade e pelo 
                  desejo de transformar ideias em realidade digital.
                </p>
                <p>
                  Trabalho com uma variedade de ferramentas e linguagens, sempre focado em entregar projetos de alta qualidade 
                  e com interfaces intuitivas.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="animate-fadeInLoad order-first md:order-last flex justify-center items-center" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Kassio - Programador Full Stack"
                layout="fill"
                objectFit="cover"
                data-ai-hint="profile portrait"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
