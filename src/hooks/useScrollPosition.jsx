import { useState, useEffect } from "react";

/**
 * Custom hook that tracks current vertical scroll position.
 * Returns the `scrollY` value (number of pixels from top).
 */
export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Set initial position

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
}
