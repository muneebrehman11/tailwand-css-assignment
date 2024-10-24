import Skills from "@/app/components/skills";
import Hero from "@/app/components/hero";

export default function Home() {
  return (
    <main className="flex-grow p-4">
      <Hero/>
      <Skills/>
    </main>
  );
}
