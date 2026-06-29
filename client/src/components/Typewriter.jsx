import { useEffect, useState } from "react";

function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const chars = Array.from(text);
    let index = 0;
    let timer;

    setDisplayText("");

    const type = () => {
      if (index >= chars.length) return;

      const currentChar = chars[index];

      setDisplayText(prev => prev + currentChar);

      index += 1;

      let delay = Math.random() * 100 + 100;

      if (currentChar === " ") {
        delay += 200;
      }

      if (".,!?".includes(currentChar)) {
        delay += 300;
      }

      timer = setTimeout(type, delay);
    };

    timer = setTimeout(type, 500);

    return () => clearTimeout(timer);

  }, [text]);

  return (
    <>
      {displayText}
      <span className="animate-pulse border-l-3"></span>
    </>
  );
}

export default Typewriter;