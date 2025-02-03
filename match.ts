import { isNone, Option, some } from "./options";

type MatchO = <T, K>(
    onNone: () => K,
    onSome: (a: T) => K
) => (x: Option<T>) => K;

export const matchO: MatchO = (onNone, onSome) => (x) =>
    isNone(x) ? onNone() : onSome(x.value);

const maybeNum: Option<string> = some("hello");

const printOption = matchO<unknown, string>(
    () => "none",
    (x: unknown) => `${x}`
);
console.log(printOption(maybeNum));
