import type { Equal, Expect, NotAny, Alike } from "./util";

type Trim = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Trim}${infer T}`
  ? TrimLeft<T>
  : S;

type aaa = TrimLeft<"str">;

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
