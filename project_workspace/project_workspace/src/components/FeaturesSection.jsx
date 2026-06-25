import { useEffect, useState } from "react";
import img1 from "../assets/img1.png";   // replace with your images
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const features = [
  "Competitive pricing",
  "Real time tracking",
  "24x7 support",
  "Verified truck discovery"
];

const images = [img1, img2, img3, img4];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".feature-item");

      sections.forEach((sec, index) => {
        const rect = sec.getBoundingClientRect();

        if (rect.top < window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="features-container">
      
      {/* LEFT SIDE */}
      <div className="features-left">
        {features.map((text, index) => (
          <div
            key={index}
            className={`feature-item ${activeIndex === index ? "active" : ""}`}
          >
            <h2>{text}</h2>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="features-right">
        <img src={images[activeIndex]} alt="feature" />
      </div>
    </div>
  );
}
