import type { Equal, Expect, NotAny, Alike } from "./util";

type Last<T extends any[]> = T extends [...any, infer U] ? U : undefined;

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
