import Image from "next/image";
import { PageShell } from "@/components/ui/PageShell";

export function VisualSection() {
  return (
    <PageShell>
      <div className="relative overflow-hidden rounded-4xl bg-accent">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-4xl border-4 border-white/15" />
        <div className="relative aspect-[1416/1220] w-full min-h-[320px] sm:min-h-[480px] lg:min-h-[600px]">
          <Image
            src="/images/visual-section.png"
            alt="Брендированная бутылка воды NOVA"
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 1800px) 100vw, 1800px"
          />
        </div>
      </div>
    </PageShell>
  );
}
