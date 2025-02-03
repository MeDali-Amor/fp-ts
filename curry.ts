const normalSum = (x: number, y: number): number => {
    return x + y;
};

const sum =
    (x: number) =>
    (y: number): number => {
        return x + y;
    };
const increment: (x: number) => number = sum(1);

const curry =
    <T, K, V>(f: (x: T, y: K) => V) =>
    (a: T) =>
    (b: K): V =>
        f(a, b);

const sum2 = curry(normalSum);
console.log(sum2(7)(5));
