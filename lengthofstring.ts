import type { Equal, Expect, NotAny, Alike } from "./util";

type StrToTouple<S extends string> = S extends `${infer T}${infer R}`
  ? [T, ...StrToTouple<R>]
  : [];
type LengthOfString<S extends string> = StrToTouple<S>["length"];

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
