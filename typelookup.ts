import type { Equal, Expect, NotAny, Alike } from "./util";

type LookUp<U, T> = any;

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
];