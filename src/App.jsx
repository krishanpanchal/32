import Valentine from "./components/Valentine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoComponent from "./components/VideoComponent";
import ProposeVideo from "./components/ProposeVideo";
import Moment from "./components/Moment";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavigationListener/> */}
      <Routes>
        <Route path="/" element={<Valentine />} />
        <Route path="/video" element={<VideoComponent />} />
        <Route path="/proposevideo" element={<ProposeVideo />} />
        <Route path="/pvs" element={<Moment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
