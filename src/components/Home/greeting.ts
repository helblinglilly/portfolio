"use client";

export function greetingText() {
  const day = new Date().getDay();

  if (day === 4) {
    return "Happy Friday, I'm Lilly";
  }

  if ([5, 6].includes(day)) {
    return "Lovely weekend, I'm Lilly";
  }

  return "Nice to meet you, I'm Lilly";
}
