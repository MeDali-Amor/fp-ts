export const compose =
    <T, K, V>(f: (x: K) => V, g: (x: T) => K) =>
    (x: T): V => {
        return f(g(x));
    };
const compose2 = <T, K, V>(f: (x: K) => V, g: (x: T) => K) => {
    return (x: T) => f(g(x));
};

const g = (n: number) => {
    return n + 1;
};
const f = (n: number): string => {
    return n.toString();
};
const c = compose(f, g)(6);
const c2 = compose2(f, g)(7);
console.log(c, c2);
