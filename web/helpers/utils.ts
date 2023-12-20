import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj as object) as (keyof Obj)[]
}

export const alphabet = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((char) => char.toUpperCase())

export function startsWithFilter<T, K extends keyof T>(
  items: Array<T>,
  query: string,
  key: K,
) {
  return items.filter(function (item) {
    if (typeof item[key] === "string") {
      const itemLower = (item[key] as string).toLowerCase()
      return itemLower.startsWith(query.toLowerCase())
    }
    return false
  })
}

export function jsonify(anything: any) {
  return JSON.stringify(anything, null, 2)
}

export function randomInclusive(max: number) {
  return Math.floor(Math.random() * (max + 1))
}
