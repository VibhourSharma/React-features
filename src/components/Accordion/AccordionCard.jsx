import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AccordionCard = ({ information }) => {
  const [showinfo, setShowInfo] = useState(false);
  return (
    <div key={information.id} className="question">
      <header>
        <h4>{information.title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showinfo)}>
          {showinfo ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </header>
      {showinfo && <p>{information.info}</p>}
    </div>
  );
};

export default AccordionCard;
