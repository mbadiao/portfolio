import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["developer", "designer"];

  return (
    <div className="flex">
      <div className="text-4xl h-[100%] font-normal text-neutral-200 dark:text-neutral-100">
        web
        <FlipWords className="text-white text-5xl" words={words} /> <br />
      </div>
    </div>
  );
}
