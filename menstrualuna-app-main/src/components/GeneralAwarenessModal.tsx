import React from "react";
import "./GeneralAwarenessModal.css"; // Styling for the modal

interface GeneralAwarenessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeneralAwarenessModal: React.FC<GeneralAwarenessModalProps> = ({
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
        <h2>General Health Awareness</h2>

        <p>Menstrual health plays a vital role in overall well-being. Here’s what you should know:</p>

        {/* Basic Menstrual Health Information */}
        <h3>Menstrual Health Basics</h3>
        <ul>
          <li><strong>What is Menstruation?</strong> A natural cycle where the uterus sheds its lining, typically lasting 3-7 days.</li>
          <li><strong>Menstrual Hygiene:</strong> Maintain hygiene by using clean menstrual products and changing them regularly.</li>
          <li><strong>Common Symptoms:</strong> Cramps, bloating, mood swings, and fatigue.</li>
          <li><strong>Menstrual Products:</strong> Pads, tampons, menstrual cups, and period underwear are available options.</li>
          <li><strong>Tracking Your Cycle:</strong> Helps in understanding ovulation, fertility, and spotting irregularities.</li>
        </ul>

        {/* PCOD Awareness */}
        <h3>PCOD (Polycystic Ovarian Disease)</h3>
        <p>PCOD is a common hormonal disorder that affects many individuals. It can cause irregular periods, acne, and weight gain.</p>
        <ul>
          <li><strong>Symptoms:</strong> Irregular periods, excessive hair growth, acne, weight gain, and difficulty in conceiving.</li>
          <li><strong>Causes:</strong> Hormonal imbalance, insulin resistance, genetic factors, and lifestyle choices.</li>
          <li><strong>Management:</strong> Healthy diet, regular exercise, stress management, and medical intervention if necessary.</li>
        </ul>

        {/* PMS and PMDD Section */}
        <h3>PMS (Premenstrual Syndrome) & PMDD (Premenstrual Dysphoric Disorder)</h3>
        <p>
          PMS and PMDD are conditions that cause physical, emotional, and behavioral changes before menstruation.
        </p>
        <ul>
          <li><strong>PMS:</strong> Common symptoms include mood swings, cravings, fatigue, bloating, irritability, and anxiety.</li>
          <li><strong>PMDD:</strong> A more severe form of PMS, causing intense mood swings, depression, panic attacks, and severe fatigue.</li>
          <li><strong>Ways to Manage:</strong> A balanced diet, hydration, exercise, sleep, and stress-relief techniques like meditation.</li>
          <li><strong>Treatment for PMDD:</strong> In severe cases, hormonal treatments or antidepressants may be recommended.</li>
        </ul>

        {/* Menstrual Disorders */}
        <h3>Common Menstrual Disorders</h3>
        <ul>
          <li><strong>Endometriosis:</strong> A painful condition where tissue similar to the uterus lining grows outside the uterus.</li>
          <li><strong>Amenorrhea:</strong> Absence of menstruation for several months (excluding pregnancy).</li>
          <li><strong>Dysmenorrhea:</strong> Severe period pain affecting daily activities.</li>
          <li><strong>Menorrhagia:</strong> Abnormally heavy or prolonged menstrual bleeding.</li>
        </ul>

        {/* Quick Tips for a Healthy Cycle */}
        <h3>Quick Tips for a Healthy Cycle</h3>
        <ul>
          <li>Eat iron-rich foods (spinach, lentils, red meat) to prevent anemia.</li>
          <li>Use heating pads or gentle exercise to relieve cramps.</li>
          <li>Stay hydrated and reduce caffeine intake to manage bloating.</li>
          <li>Practice stress-relief techniques like yoga or meditation.</li>
        </ul>

        {/* Important Facts */}
        <h3>Did You Know?</h3>
        <ul>
          <li>Over 800 million people menstruate worldwide every day.</li>
          <li>On average, a person menstruates for about **7 years** in their lifetime.</li>
          <li>Irregular periods can sometimes indicate underlying health conditions.</li>
        </ul>

        {/* Learn More Section */}
        <h3>Learn More</h3>
        <ul>
          <li>
            <a href="https://www.who.int/news-room/fact-sheets/detail/menstrual-health" 
               target="_blank" 
               rel="noopener noreferrer">
              WHO: Menstrual Health & Awareness
            </a>
          </li>
          <li>
            <a href="https://www.cdc.gov/reproductivehealth/womensrh/menstruation.html" 
               target="_blank" 
               rel="noopener noreferrer">
              CDC: Menstrual Health
            </a>
          </li>
        </ul>

        {/* Awareness Image */}
        <img
          src="https://via.placeholder.com/400x200" // Placeholder image URL
          alt="Menstrual Awareness"
          className="awareness-image"
        />
      </div>
    </div>
  );
};

export default GeneralAwarenessModal;
