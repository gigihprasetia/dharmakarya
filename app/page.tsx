import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Maps } from "@/components/maps";
import { Gallery } from "@/components/gallery";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Maps />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
