import { compose } from "./compose";

export type Option<T> = Some<T> | None;

type Some<T> = {
    _tag: "Some";
    value: T;
};
type None = {
    _tag: "None";
};

export const some = <T>(x: T): Option<T> => ({
    _tag: "Some",
    value: x,
});

// none is a singelton value
export const none: Option<never> = { _tag: "None" };

// the return value is of type boolean, but we can use type guard "x is "some Type"" to check if x is of that "Type"
export const isNone = <T>(option: Option<T>): option is None =>
    option._tag === "None";
