import { PageShell } from "@/components/ui/PageShell";

export function IntroSection() {
  return (
    <PageShell>
      <div className="rounded-4xl border-4 border-primary/[0.01] px-6 py-16 sm:px-12 sm:py-24 lg:px-[132px] lg:py-[164px]">
        <div className="mx-auto max-w-content">
          <div className="flex max-w-[542px] flex-col gap-16 sm:gap-24 lg:gap-40">
            <h2 className="font-inter-tight text-2xl font-medium uppercase leading-8 text-primary sm:text-3xl sm:leading-9 lg:text-[36px] lg:leading-[36px]">
              Новый рекламный канал, который действительно используют
            </h2>

            <div className="h-0.5 w-full bg-accent" />

            <p className="text-lg font-light leading-[26px] text-primary">
              Большинство рекламы конкурирует за секунды внимания. NOVA
              превращает обычную бутылку воды в рекламный носитель, который
              человек получает бесплатно, использует и видит несколько раз
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
