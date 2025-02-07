type Incremrnt = (x: number) => number;
type NumToString = (x: number) => string;
type Compose = <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (x: A) => C;

// const increment: Incremrnt = (x) => x + 1;

const numToString: NumToString = (x) => x.toString();

const incrementToString = (x: number): string => {
    return numToString(increment(x));
};

const compose: Compose = (f, g) => {
    return (x) => f(g(x));
};

const increment_then_tostring = compose(numToString, increment);

const a = increment_then_tostring(12);
const b = incrementToString(12);
console.log(a, b);
