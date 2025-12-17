import React, { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
      )}
      <p>&copy; {new Date().getFullYear()} Jeff Amayo. All Rights Reserved.</p>
    </footer>
  );
}
