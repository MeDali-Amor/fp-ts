type Some<T> =  {
    value: T;
    _tag: "some";

}
type None= {
    _tag: "none";
}
type Option<T>= Some<T> | None

/** type constructors */

const some= <T>(x:T):Some<T>=>({
    value: x,
    _tag: "some"
})
const none : Option<never>= {_tag: "none"}

const isNone = <T>(opt:Option<T>): opt is None=> opt._tag === "none" 

type MaybeNumber = Option<number>;

const divideTwo = (x:number) : MaybeNumber=> x===0 ?none: some(2/x)  