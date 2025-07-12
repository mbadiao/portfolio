import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["developer", "designer", "problem solver", "innovator"];

  return (
    <div className="flex items-center">
      <span className="text-2xl lg:text-3xl xl:text-4xl font-medium text-neutral-300">
        web
      </span>
      <FlipWords className="text-emerald-400 text-2xl lg:text-3xl xl:text-4xl font-medium ml-2" words={words} />
    </div>
  );
}
