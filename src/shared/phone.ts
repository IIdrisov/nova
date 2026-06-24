export function extractRuPhoneDigits(value: string): string {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  }

  if (!digits.startsWith("7")) {
    digits = `7${digits}`;
  }

  return digits.slice(0, 11);
}

export function formatRuPhoneInput(value: string): string {
  const digits = extractRuPhoneDigits(value);
  const local = digits.slice(1);

  if (local.length === 0) {
    return "+7";
  }

  if (local.length <= 3) {
    return `+7 (${local}`;
  }

  let formatted = `+7 (${local.slice(0, 3)}) ${local.slice(3, 6)}`;

  if (local.length <= 6) {
    return formatted.trimEnd();
  }

  formatted += `-${local.slice(6, 8)}`;

  if (local.length <= 8) {
    return formatted;
  }

  return `${formatted}-${local.slice(8, 10)}`;
}

export function normalizeRuPhone(value: string): string | null {
  const digits = extractRuPhoneDigits(value);

  if (digits.length !== 11) {
    return null;
  }

  return `+${digits}`;
}

export function isRuPhoneComplete(value: string): boolean {
  return normalizeRuPhone(value) !== null;
}
