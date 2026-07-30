import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/Payments-platform-designed-for-differentiation-and-control-small.webp";

function DifferentiationSection() {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.2, rootMargin: "-150px 0px -150px 0px" }
  );

  if (headingRef.current) {
    observer.observe(headingRef.current);
  }

  return () => observer.disconnect();
}, []);
  return (
    <section className="diff-section">
      <div className="diff-box">
        <img
          src={bgImage}
          alt="Configurable building blocks background"
          className="diff-bg"
        />

        <div className="diff-overlay">
          <h2
  ref={headingRef}
  className={`diff-heading ${isVisible ? "diff-heading-visible" : ""}`}
>
  <span className="diff-line">
    Designed for differentiation<span className="diff-dot">.</span>
  </span>
  <span className="diff-line">
    Configured for control<span className="diff-dot">.</span>
  </span>
</h2>
        </div>
      </div>
    </section>
  );
}

export default DifferentiationSection;