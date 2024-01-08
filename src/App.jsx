import Accordion from "./components/Accordion/Accordion";
import DropdownMenu from "./components/Dropdown Menu/DropdownMenu";
import Modal from "./components/Modal/Modal";
import Pagination from "./components/Pagination/Pagination";
import Slider from "./components/Slider/Slider";
import ToggleSwitch from "./components/Toggle Switch/ToggleSwitch";

function App() {
  return (
    <>
      <Accordion />
      <Modal />
      <Slider />
      <Pagination />
      <ToggleSwitch />
      <DropdownMenu />
    </>
  );
}

export default App;
