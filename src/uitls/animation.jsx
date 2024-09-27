import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ScrollingAnimation = ({ children, options = {} }) => {
  const scrollableElementRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      gsap.to(scrollableElementRef.current, {
        y: window.scrollY,
        duration: options.duration || 0.5, // Default duration
        ease: options.ease || "power3.out",  // Default easing
        scrollTrigger: {
          trigger: scrollableElementRef.current,
          start: options.start || "top 2%", // Customizable start position
          end: options.end || "top", // Customizable end position
          scrub: options.scrub || false, // Default scrub enabled
        },
      });
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [options]); // Re-run effect when options change

  return (
    <div ref={scrollableElementRef} className="scrollable-container">
      {children}
    </div>
  );
};

export default ScrollingAnimation;