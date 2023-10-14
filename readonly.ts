import type { Equal, Expect, Alike } from "./util";

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [t in keyof T as t extends K ? never : t]: T[t];
} & {
  readonly [t in K]: T[t];
};

type aa = MyReadonly2<Todo1, "title">;
interface Todo {
  title: string;
  description: string;
}

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
