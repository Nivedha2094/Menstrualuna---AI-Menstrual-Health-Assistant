import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TrackerInfo from "./components/TrackerInfo";
import Calendar from "./components/Calendar";
import DetailsModal from "./components/DetailsModal";
import ChatBot from "./components/Chatbot";
import GeneralAwarenessModal from "./components/GeneralAwarenessModal";
import MenstrualProductInfoModal from "./components/MenstrualProductInfoModal";
import "./App.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGeneralAwarenessOpen, setIsGeneralAwarenessOpen] = useState(false);
  const [isMenstrualProductInfoOpen, setIsMenstrualProductInfoOpen] = useState(false);
  const [lastPeriodStart, setLastPeriodStart] = useState<Date | null>(null);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodDuration, setPeriodDuration] = useState<number>(5);
  const [isChatBotOpen, setIsChatBotOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedLastPeriodStart = localStorage.getItem("lastPeriodStart");
    const storedCycleLength = localStorage.getItem("cycleLength");
    const storedPeriodDuration = localStorage.getItem("periodDuration");

    if (storedLastPeriodStart) {
      setLastPeriodStart(new Date(storedLastPeriodStart));
    }
    if (storedCycleLength) {
      setCycleLength(Number(storedCycleLength));
    }
    if (storedPeriodDuration) {
      setPeriodDuration(Number(storedPeriodDuration));
    }
  }, []);

  const closeModal = () => setIsModalOpen(false);
  const toggleChatBot = () => setIsChatBotOpen((prevState) => !prevState);
  const toggleGeneralAwareness = () => setIsGeneralAwarenessOpen(!isGeneralAwarenessOpen);
  const toggleMenstrualProductInfo = () => setIsMenstrualProductInfoOpen(!isMenstrualProductInfoOpen);

  return (
    <div className="app">
      <NavBar />
      <main className="content">
        {lastPeriodStart && (
          <TrackerInfo
            lastPeriodStart={lastPeriodStart}
            cycleLength={cycleLength}
            periodDuration={periodDuration}
          />
        )}
        <Calendar
          lastPeriodStart={lastPeriodStart}
          cycleLength={cycleLength}
          periodDuration={periodDuration}
          setLastPeriodStart={setLastPeriodStart}
          setCycleLength={setCycleLength}
          setPeriodDuration={setPeriodDuration}
        />

        {isModalOpen && <DetailsModal isOpen={isModalOpen} onClose={closeModal} />}
        {isChatBotOpen && <ChatBot />}
        
        {/* Chatbot toggle button */}
        <button className="chatbot-toggle-btn" onClick={toggleChatBot}>
          {isChatBotOpen ? "Close Chatbot" : "Open Chatbot"}
        </button>

        {/* Button to open General Awareness Modal */}
        <div className="buttons-container">
  {/* Button to open General Awareness Modal */}
  <button className="general-awareness-btn" onClick={toggleGeneralAwareness}>
    Awareness
  </button>

  {/* Button to open Menstrual Product Info Modal */}
  <button className="menstrual-product-info-btn" onClick={toggleMenstrualProductInfo}>
    Products
  </button>
  </div>


        {/* Render the modals */}
        <GeneralAwarenessModal isOpen={isGeneralAwarenessOpen} onClose={toggleGeneralAwareness} />
        <MenstrualProductInfoModal isOpen={isMenstrualProductInfoOpen} onClose={toggleMenstrualProductInfo} />
      </main>
    </div>
  );
};

export default App;
