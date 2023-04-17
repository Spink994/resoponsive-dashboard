import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This function takes in a list of tailwind classes and optimises them and then returns the optimised output
 * For example it takes px-2 and py-2 and returns p-2, and also removes redundant classNames
 * @param input
 * @returns - input
 */
export default function tailwindMerger(...input: ClassValue[]) {
  return twMerge(clsx(input));
}
