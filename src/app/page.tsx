import Hero from "./components/homepage/herosection";
import Achievement from "./components/homepage/achievements";
import CollaborationCard from "./components/homepage/collaborationCard";

export default function Home() {
  return (
    <main className="pt-28">
      <Hero />
      <Achievement />
      <CollaborationCard />
    </main>
  );
}
