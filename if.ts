import type { Equal, Expect, NotAny } from "./util";

type If<C, T, F> = C extends true ? T : F;

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

type error = If<null, "a", "b">;
