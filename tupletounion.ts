import type { Equal, Expect, NotAny } from "./util";

type TupleToUnion<T> = any;

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
