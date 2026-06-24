import { processSteps } from "@/data/site";
import { PageShell } from "@/components/ui/PageShell";

export function ProcessSection() {
  return (
    <PageShell innerClassName="px-3 sm:px-6">
      <div className="py-16 sm:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.duration}
              className="flex min-h-[325px] flex-col rounded-4xl border-2 border-black/5 bg-white p-8 sm:p-[34px]"
            >
              <p className="flex-1 font-inter-tight text-xl font-medium leading-8 text-primary sm:text-2xl sm:leading-8">
                {step.quote}
              </p>

              <div className="mt-8 border-t border-black/5 pt-6">
                <p className="font-inter-tight text-xl font-medium leading-7 text-primary">
                  {step.duration}
                </p>
                <p className="mt-1 text-base leading-6 text-secondary">
                  {step.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
