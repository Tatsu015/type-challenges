import type { Equal, Expect, NotAny } from "./util";

type MyExclude<T, U> = T extends U ? never : T;

type aaaaa = MyExclude<"a" | "b" | "c", "c">;

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
