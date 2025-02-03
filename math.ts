import { compose } from "./compose";
import { isNone, none, Option, some } from "./options";

export const increment = (n: number): number => n + 1;

// not total, not defined for "0"
export const devideTwo = (n: number): number => 2 / n;

export const devideTwo2 = (n: number): Option<number> =>
    n === 0 ? none : some(2 / n);

const composed = compose(
    (opt: Option<number>) => (isNone(opt) ? none : some(increment(opt.value))),
    devideTwo2
);

console.log(composed(8));
