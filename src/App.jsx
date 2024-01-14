import Accordion from "./components/Accordion/Accordion";
import DatePicker from "./components/Date Picker/DatePicker";
import DropdownMenu from "./components/Dropdown Menu/DropdownMenu";
import Modal from "./components/Modal/Modal";
import Notifications from "./components/Notification Banner/Notifications";
import Pagination from "./components/Pagination/Pagination";
import Slider from "./components/Slider/Slider";
import Tabs from "./components/Tabs Component/Tabs";
import ToggleSwitch from "./components/Toggle Switch/ToggleSwitch";
import FileUploadComponent from "./components/File Upload/FileUploadComponent";
import Progress from "./components/Progress Bar/Progress";
import Tooltip from "./components/Tool Tip/Tooltip";

function App() {
  return (
    <>
      <Accordion />
      <Modal />
      <Slider />
      <Pagination />
      <ToggleSwitch />
      <DropdownMenu />
      <Tabs />
      <DatePicker />
      <Notifications />
      <FileUploadComponent />
      <Progress />
      <Tooltip />
    </>
  );
}

export default App;
