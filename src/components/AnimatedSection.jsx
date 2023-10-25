"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
function AnimatedSection({ children, animationClass }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const sectionRef = useRef(null);
  useEffect(() => {
    if (inView) {
      if (sectionRef.current) {
        sectionRef.current.classList.add('animate__animated', ...animationClass.trim().split(' '));
      }
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <section className="section" ref={sectionRef}>
        {children}
      </section>
    </div> 
  );                                              
}

export default AnimatedSection;
