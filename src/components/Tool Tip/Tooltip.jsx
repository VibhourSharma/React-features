import ToolTipText from "./ToolTipText";
import { FaInfoCircle } from "react-icons/fa";
import "./Tooltip.css";

const Tooltip = () => {
  return (
    <div className="tooltip">
      <button>Alert</button>
      <ToolTipText text={"working text I am working"}>
        <span>
          <FaInfoCircle />
          info
        </span>
      </ToolTipText>
    </div>
  );
};

export default Tooltip;
