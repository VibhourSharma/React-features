import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="tabs">
      <h3>Tabs Component</h3>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <p>
            Tab 1: The lion is a majestic predator known for its strength and
            regal appearance. Lions are often referred to as the 'king of the
            jungle' and are social animals that live in groups called prides.
          </p>
        )}
        {activeTab === 2 && (
          <p>
            Tab 2: Rivers are natural watercourses that play a vital role in
            shaping landscapes and supporting ecosystems.
          </p>
        )}
        {activeTab === 3 && (
          <p>
            Tab 3: A storm is a powerful and atmospheric disturbance, often
            characterized by strong winds and heavy rain. Storms can take
            various forms, including hurricanes, tornadoes, and thunderstorms.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
