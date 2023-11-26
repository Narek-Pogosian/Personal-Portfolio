import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(title: string) {
  return title
    .replace(/[^A-Za-z0-9 ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}
