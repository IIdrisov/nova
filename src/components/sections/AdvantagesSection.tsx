import { advantages } from "@/data/site";
import { PageShell } from "@/components/ui/PageShell";

export function AdvantagesSection() {
  return (
    <PageShell>
      <div className="overflow-hidden rounded-4xl border-4 border-primary/[0.01] bg-surface px-6 py-16 sm:px-12 sm:py-24 lg:px-[132px] lg:py-[164px]">
        <ul className="mx-auto max-w-content columns-1 gap-6 lg:columns-2">
          {advantages.map((item) => (
            <li key={item.title.join(" ")} className="mb-6 break-inside-avoid">
              <article className="group flex flex-col justify-between gap-16 rounded-[40px] border-2 border-black/5 bg-white px-10 py-20 sm:gap-24 lg:gap-[120px] lg:transition-colors lg:duration-300 lg:ease-out lg:hover:border-white/15 lg:hover:bg-primary">
                <div>
                  {item.title.map((line) => (
                    <p
                      key={line}
                      className="font-inter-tight text-[24px] font-semibold uppercase leading-8 tracking-[-0.02em] text-primary lg:transition-colors lg:duration-300 lg:ease-out lg:group-hover:text-white"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <p className="text-lg font-light leading-[26px] text-primary lg:transition-colors lg:duration-300 lg:ease-out lg:group-hover:text-white">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
