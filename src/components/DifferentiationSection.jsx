import "./DifferentiationSection.css";
import bgImage from "../assets/Payments-platform-designed-for-differentiation-and-control-small.webp";

function DifferentiationSection() {
  return (
    <section className="diff-section">
      <img
        src={bgImage}
        alt="Configurable building blocks background"
        className="diff-bg"
      />

      <div className="diff-overlay">
        <h2 className="diff-heading">
          Designed for differentiation
          <span className="diff-dot">.</span>
          <br />
          Configured for control
          <span className="diff-dot">.</span>
        </h2>
      </div>
    </section>
  );
}

export default DifferentiationSection;
