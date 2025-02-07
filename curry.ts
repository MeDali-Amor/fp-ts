const normalSum = (x: number, y: number): number => {
    return x + y;
};

const sum = (x: number) => (y: number) => x + y;


const increment = (x: number) => sum(1)(x);
/** equivalent to : point-free style, e.i no explicit mention of any parameter*/
const increment2 = sum(1);

const plusTwo =(x:number)=> sum(2)(x);
/** equivalent to */
const plusTwo2 = sum(2);

type Curry2 = <A,B,C>(f:(a:A,b:B)=>C) => (a:A)=>(b:B)=>C;

const curry:Curry2 = (f)=>(a)=>(b)=>f(a,b)

const curriedSum = curry(normalSum);

const increment3 = curriedSum(1);



