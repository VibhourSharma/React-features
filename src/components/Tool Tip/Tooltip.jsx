import ToolTipText from "./ToolTipText";
import { FaInfoCircle } from "react-icons/fa";
import "./Tooltip.css";

const Tooltip = () => {
  return (
    <div className="tooltip-main">
      <h3>/Tooltip</h3>
      <div>
        <button>Alert</button>
        <ToolTipText text={"Information text reagrding the tooltip"}>
          <span>
            <FaInfoCircle />
            info
          </span>
        </ToolTipText>
      </div>
    </div>
  );
};

export default Tooltip;
