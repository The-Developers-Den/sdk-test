import { SayHelloProps } from "./types";

export function sayHello({ name, age }: SayHelloProps) {
  console.log(`Hello, ${name}! You are ${age} years old!`);
}
