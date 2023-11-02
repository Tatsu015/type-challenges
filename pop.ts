import type { Equal, Expect, NotAny, Alike } from "./util";

type Pop<T extends any[]> = T extends [...infer U, any] ? U : [];

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>
];
