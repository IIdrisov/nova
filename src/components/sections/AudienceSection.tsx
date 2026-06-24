import { audienceCards } from "@/data/site";
import { PageShell } from "@/components/ui/PageShell";

export function AudienceSection() {
  return (
    <PageShell>
      <div className="overflow-hidden rounded-4xl border-4 border-primary/[0.01] bg-surface px-6 py-16 sm:px-12 sm:py-24 lg:px-[132px] lg:py-[164px]">
        <div className="mx-auto flex w-full max-w-content flex-col gap-6">
          {audienceCards.map((card) => (
            <article
              key={card.tag}
              className="rounded-[40px] border-4 border-primary/5 bg-white px-8 pb-12 pt-10 sm:px-[52px] sm:pb-[60px] sm:pt-[52px]"
            >
              <span className="inline-flex items-center rounded-full bg-accent-purple px-3 py-0.5 text-base leading-6 text-white">
                {card.tag}
              </span>

              <h3 className="mt-4 max-w-[560px] font-inter-tight text-2xl font-medium leading-8 text-primary sm:text-[36px] sm:leading-[38px]">
                {card.title.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < card.title.length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <p className="mt-4 max-w-[560px] text-lg font-light leading-7 text-secondary sm:text-xl sm:leading-7">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
