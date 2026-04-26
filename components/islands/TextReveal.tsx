"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
}

export default function TextReveal({
  text,
  className = "",
  highlightWords = [],
  highlightClass = "text-tt-blue",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isHighlighted = highlightWords.includes(word.replace(/[.,!?;:]/g, ""));
        const cleanWord = word.replace(/[.,!?;:]/g, "");
        const punctuation = word.slice(cleanWord.length);

        return (
          <motion.span
            key={i}
            className={`inline-block ${isHighlighted ? highlightClass : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {cleanWord}
            {punctuation}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </span>
  );
}
