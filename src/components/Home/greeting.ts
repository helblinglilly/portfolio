"use client";

export function greetingText() {
  const day = new Date().getDay();

  if (day === 5) {
    return "Happy Friday, I'm Lilly";
  }

  if ([6, 7].includes(day)) {
    return "Lovely weekend, I'm Lilly";
  }

  return "Nice to meet you, I'm Lilly";
}
