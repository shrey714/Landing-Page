import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(rootMargin = "0px") {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin, threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isInView] as const;
}
