"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export function ContactSection() {
  const [phone, setPhone] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="contact" className="w-full p-3">
      <div className="mx-auto flex w-full max-w-page justify-center px-3 sm:px-6">
        <div className="w-full max-w-[560px] rounded-4xl border-4 border-white/15 bg-primary p-8 sm:p-[52px]">
          <div className="relative mb-6 h-[80px] w-[80px]">
            <Image
              src="/images/logo-bubble.svg"
              alt="NOVA"
              fill
              className="object-contain"
            />
          </div>

          <p className="mb-6 text-lg leading-7 text-white sm:text-xl sm:leading-7">
            Расскажите о своей задаче и давайте станем лучшими партнерами!
            Подготовим предложение с охватом, стоимостью и вариантами
            распространения
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="phone">
              Телефон
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Телефон"
              className="h-[58px] w-full rounded-2xl bg-[#f3f2f3] px-4 text-lg font-medium leading-6 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="flex h-[58px] w-full items-center justify-center rounded-2xl bg-accent px-3 py-4 text-[17px] font-semibold leading-[26px] tracking-[0.1px] text-white transition-colors hover:bg-accent/90"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
