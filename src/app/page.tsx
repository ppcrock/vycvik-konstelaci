import Hero from "./components/homepage/herosection";
import Achievement from "./components/homepage/achievements";
import Konstelator from "./components/homepage/konstelator";
import VycvikForm from "./components/homepage/vycvik-form";
import Contact from "./components/homepage/contact";

export default function Home() {
  return (
    <main className="pt-28">
      <Hero />
      <Konstelator />
      <Achievement />
      <VycvikForm />
      <Contact />
    </main>
  );
}
