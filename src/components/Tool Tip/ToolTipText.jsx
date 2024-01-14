import { useState } from "react";

const ToolTipText = ({ text, Children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {Children}
      {isVisible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default ToolTipText;
