"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type AnimationVariant = "fadeIn" | "slideUp" | "typewriter" | "bounce" | "wave";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation: AnimationVariant;
  speed?: number;
  delay?: number;
  wrapperClassName?: string;
  onAnimationComplete?: () => void;
}

export default function AnimatedText({
  text,
  className = "",
  animation = "fadeIn",
  speed = 1,
  delay = 0,
  wrapperClassName = "",
  onAnimationComplete,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // 用于追踪上一个主题
  const prevThemeRef = useRef(currentTheme);

  // 重置typewriter动画
  useEffect(() => {
    if (prevThemeRef.current !== currentTheme && animation === "typewriter") {
      setDisplayText("");
      setCharIndex(0);
      setIsAnimationComplete(false);
    }

    prevThemeRef.current = currentTheme;
  }, [currentTheme, animation]);

  useEffect(() => {
    if (animation === "typewriter" && !isAnimationComplete) {
      const timeout = setTimeout(() => {
        if (charIndex < text.length) {
          setDisplayText((prev) => prev + text.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setIsAnimationComplete(true);
          onAnimationComplete?.();
        }
      }, 100 / speed);

      return () => clearTimeout(timeout);
    }
  }, [
    animation,
    charIndex,
    isAnimationComplete,
    onAnimationComplete,
    speed,
    text,
  ]);

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeIn":
        return "animate-fadeIn";
      case "slideUp":
        return "animate-slideUp";
      case "bounce":
        return "animate-bounce";
      case "wave":
        return "animate-wave";
      default:
        return "";
    }
  };

  if (animation === "typewriter") {
    return (
      <span
        className={`typewriter-container ${wrapperClassName}`}
        style={{ animationDelay: `${delay}s` }}
      >
        <span className={className}>{displayText}</span>
        {!isAnimationComplete && <span className="typewriter-cursor">|</span>}
      </span>
    );
  }

  if (animation === "wave") {
    return (
      <span className={`inline-block ${wrapperClassName}`}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block ${className} animate-wave`}
            style={{
              animationDelay: `${delay + index * 0.1}s`,
              animationDuration: `${1 / speed}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span
      className={`${getAnimationClass()} ${wrapperClassName}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${1 / speed}s`,
      }}
    >
      <span className={className}>{text}</span>
    </span>
  );
}
