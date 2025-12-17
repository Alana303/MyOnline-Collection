import React, { useEffect } from "react";
import Hero from "../components/Hero";


export default function Home() {
  useEffect(() => {
    // testimonials carousel logic (if you have testimonial elements on other pages)
    let testimonialIndex = 0;
    const rotate = () => {
      const testimonials = document.querySelectorAll(".testimonial");
      if (testimonials.length === 0) return;
      testimonials.forEach((t, i) => {
        t.style.transform = `translateX(${100 * (i - testimonialIndex)}%)`;
      });
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    };
    const id = setInterval(rotate, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}
