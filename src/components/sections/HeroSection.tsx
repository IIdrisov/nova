"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full p-3">
      <div className="relative mx-auto w-full max-w-page">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-4xl border-4 border-white/15" />

        <header className="hero-gradient relative flex min-h-[620px] items-center justify-center overflow-hidden rounded-4xl px-5 py-20 sm:min-h-[680px] sm:px-8 sm:py-24 lg:min-h-[780px] lg:px-[111px] lg:py-28 xl:min-h-[820px] xl:px-[132px]">
          <div className="hero-gradient-blobs" aria-hidden>
            <span className="hero-blob-1" />
            <span className="hero-blob-2" />
            <span className="hero-blob-3" />
          </div>

          <div className="relative z-20 flex w-full flex-col items-center gap-8 lg:gap-[32px]">
            <div className="flex w-full flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:gap-8 lg:text-left">
              <div className="relative h-[220px] w-[280px] shrink-0 sm:h-[300px] sm:w-[380px] lg:h-[408px] lg:w-[512px] xl:h-[450px] xl:w-[580px]">
                <Image
                  src="/images/nova-logo.svg"
                  alt="NOVA"
                  fill
                  priority
                  className="object-contain object-center lg:object-left"
                />
              </div>

              <h1 className="max-w-[643px] font-inter-tight text-3xl font-normal leading-[1.1] tracking-[-0.01em] text-white sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[1.1] xl:text-[72px] xl:leading-[79px] xl:tracking-[-0.72px]">
                Сделайте свой бренд доступным для всех!
              </h1>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-[17px] font-semibold leading-[26px] tracking-[0.1px] text-black/80 transition-colors hover:bg-white/90"
            >
              Быстрая связь
            </a>
          </div>
        </header>
      </div>
    </section>
  );
}
