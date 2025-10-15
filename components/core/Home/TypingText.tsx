import { textList } from "@/lib/constants";
import { useEffect, useState } from "react";

const TypingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textList[currentIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        // wait 1.5s before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % textList.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, textList]);

  return (
    <div className="text-xl font-semibold">
      I am specialized in{" "}
      <span className="border-r-2 border-gray-500 pr-1 animate-blink">
        {displayedText}
      </span>
    </div>
  );
};

export default TypingText;