import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/i2c-Digital-Banking-Platform-Excellence-and-Agility.webp";

function EstablishedSection() {
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
    <section className="established-section" id="established-section">
      <div className="established-box">
        <img
          src={bgImage}
          alt="Established for excellence, adapted for agility"
          className="established-bg"
        />

        <div className="established-overlay">
          <h2
            ref={headingRef}
            className={`established-heading ${
              isVisible ? "established-heading-visible" : ""
            }`}
          >
            <span className="established-line">
              Established for excellence
              <span className="established-dot">.</span>
            </span>
            <span className="established-line">
              Adapted for agility
              <span className="established-dot">.</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default EstablishedSection;