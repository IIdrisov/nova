"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  formatRuPhoneInput,
  isRuPhoneComplete,
  normalizeRuPhone,
} from "@/shared/phone";

type FormStatus = "idle" | "loading" | "success" | "error";

const PHONE_PLACEHOLDER = "+7 (999) 123-45-67";

export function ContactSection() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatRuPhoneInput(event.target.value));
    if (errorMessage) {
      setErrorMessage("");
    }
  }

  function handlePhoneFocus() {
    if (!phone) {
      setPhone("+7");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!isRuPhoneComplete(phone)) {
      setStatus("error");
      setErrorMessage("Введите корректный номер телефона");
      return;
    }

    const normalizedPhone = normalizeRuPhone(phone);
    if (!normalizedPhone) {
      setStatus("error");
      setErrorMessage("Введите корректный номер телефона");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/v1/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalizedPhone }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error?.message ?? "Не удалось отправить заявку",
        );
        return;
      }

      setStatus("success");
      setPhone("");
    } catch {
      setStatus("error");
      setErrorMessage("Не удалось отправить заявку. Попробуйте позже.");
    }
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

          {status === "success" ? (
            <p className="rounded-2xl bg-white/10 px-4 py-4 text-lg leading-7 text-white">
              Заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="sr-only" htmlFor="phone">
                Телефон
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={handlePhoneChange}
                onFocus={handlePhoneFocus}
                placeholder={PHONE_PLACEHOLDER}
                disabled={status === "loading"}
                className="h-[58px] w-full rounded-2xl bg-[#f3f2f3] px-4 text-lg font-medium leading-6 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-60"
              />
              {errorMessage ? (
                <p className="text-sm leading-6 text-red-300">{errorMessage}</p>
              ) : null}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex h-[58px] w-full items-center justify-center rounded-2xl bg-accent px-3 py-4 text-[17px] font-semibold leading-[26px] tracking-[0.1px] text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
              >
                {status === "loading" ? "Отправка..." : "Отправить"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
