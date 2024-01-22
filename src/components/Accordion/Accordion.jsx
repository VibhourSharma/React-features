import data from "./data";
import "./Accordion.css";
import AccordionCard from "./AccordionCard";

const Accordion = () => {
  return (
    <div className="accordion-container">
      <div className="container">
        <h3>Day 1: Accordion</h3>
        <section className="info">
          {data.map((information) => (
            <AccordionCard information={information} key={information.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Accordion;
