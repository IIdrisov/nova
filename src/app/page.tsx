import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { VisualSection } from "@/components/sections/VisualSection";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <IntroSection />
      <AdvantagesSection />
      <ProcessSection />
      <VisualSection />
      <AudienceSection />
      <ContactSection />
    </main>
  );
}
