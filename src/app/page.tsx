import Header from '@/components/header';
import AboutMe from '@/components/about-me';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20"> {/* Add padding-top to offset fixed header */}
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
