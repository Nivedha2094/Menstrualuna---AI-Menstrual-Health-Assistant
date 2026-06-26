// src/components/MenstrualProductInfoModal.tsx
import React from "react";
import "./MenstrualProductInfoModal.css"; // Styling for the modal

interface MenstrualProductInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenstrualProductInfoModal: React.FC<MenstrualProductInfoModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times; {/* Close icon */}
        </button>
        <h2>Menstrual Products & Health Awareness</h2>

        <p>
          Menstrual hygiene is essential for maintaining good health. Here are some key products and
          insights about menstrual health.
        </p>

        <h3>Types of Menstrual Products:</h3>
        <ul>
          <li>
            <strong>Menstrual Cup:</strong> A reusable, flexible cup inserted into the vagina to collect 
            menstrual flow. It is eco-friendly and can last up to 10 years with proper care.
          </li>
          <li>
            <strong>Pads:</strong> Absorbent materials worn externally to absorb menstrual blood. 
            Available in different sizes and thicknesses.
          </li>
          <li>
            <strong>Tampons:</strong> Small, cylindrical products inserted into the vagina to absorb menstrual flow. 
            Should be changed every 4-6 hours to prevent infections.
          </li>
          <li>
            <strong>Period Underwear:</strong> Specially designed underwear with absorbent layers that can be 
            worn alone or as backup protection.
          </li>
          <li>
            <strong>Cloth Pads:</strong> Reusable fabric-based pads that can be washed and reused. 
            An eco-friendly alternative to disposable pads.
          </li>
        </ul>

        <h3>Common Menstrual Disorders:</h3>
        <ul>
          <li>
            <strong>PCOD (Polycystic Ovarian Disease):</strong> A condition where ovaries produce immature eggs, leading to irregular periods, weight gain, and hormonal imbalances.
          </li>
          <li>
            <strong>PCOS (Polycystic Ovary Syndrome):</strong> A hormonal disorder causing enlarged ovaries with cysts, irregular cycles, excessive hair growth, acne, and infertility issues.
          </li>
          <li>
            <strong>Dysmenorrhea:</strong> Severe menstrual cramps that can interfere with daily activities.
          </li>
          <li>
            <strong>Menorrhagia:</strong> Heavy menstrual bleeding lasting longer than 7 days.
          </li>
          <li>
            <strong>Amenorrhea:</strong> Absence of menstruation due to stress, hormonal imbalance, or other underlying issues.
          </li>
        </ul>

        <h3>Tips for a Healthy Menstrual Cycle:</h3>
        <ul>
          <li>Stay hydrated and maintain a balanced diet rich in iron and vitamins.</li>
          <li>Exercise regularly to reduce cramps and improve overall menstrual health.</li>
          <li>Maintain good hygiene by changing menstrual products regularly.</li>
          <li>Track your cycle to identify irregularities early.</li>
          <li>Consult a doctor if you experience extreme pain, irregular periods, or other symptoms.</li>
        </ul>

        <h3>Useful Resources:</h3>
        <ul>
          <li>
            <a href="https://www.who.int/news-room/fact-sheets/detail/menstrual-health" 
               target="_blank" rel="noopener noreferrer">
              WHO: Menstrual Health
            </a>
          </li>
          <li>
            <a href="https://www.healthline.com/health/pcos" 
               target="_blank" rel="noopener noreferrer">
              PCOS Overview - Healthline
            </a>
          </li>
        </ul>

        <img
          src="https://via.placeholder.com/400x200" // Placeholder image URL
          alt="Menstrual Health Awareness"
          className="awareness-image"
        />
      </div>
    </div>
  );
};

export default MenstrualProductInfoModal;
