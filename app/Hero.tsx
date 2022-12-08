"use client";

import BackgroundSquare from "@components/common/BackgroundSquare";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Dang Quang Vu",
      "I'm a Blockchain Engineer",
      "My Channel Youtube i's @blockofvu",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="hero" className="text-center">
      <div className="flex flex-col space-y-8 items-center justify-center">
        <BackgroundSquare />
        <h1>
          <span>
            {text}
            <Cursor cursorColor="#f7ab0a" />
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
