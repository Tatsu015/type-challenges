import type { Equal, Expect, NotAny, Alike } from "./util";

type AppendArgument<Fn, A> = Fn extends (...args: infer Arg) => infer Ret
  ? (...args: [...Arg, A]) => Ret
  : undefined;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>
];
