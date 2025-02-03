type List<T> = Cons<T> | Nil;

interface Nil {
    _tag: "Nil";
}
interface Cons<T> {
    _tag: "Cons";
    head: T;
    tail: List<T>;
}

const nil: List<never> = { _tag: "Nil" };

const cons = <T>(head: T, tail: List<T>): List<T> => ({
    _tag: "Cons",
    head,
    tail,
});

const isNil = <T>(list: List<T>): list is Nil => list._tag === "Nil";
const printList = <T>(list: List<T>): string =>
    isNil(list)
        ? ""
        : `${list.head}${isNil(list.tail) ? "" : ", " + printList(list.tail)}`;

const myList = cons("hello", cons("world", nil));
const ll: List<number> = {
    _tag: "Cons",
    head: 1,
    tail: {
        _tag: "Nil",
    },
};
console.log(printList(myList));
console.log(printList(ll));
// console.log(isNil(myList));
// const tl = myList.;
// console.log(isNil());
