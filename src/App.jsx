import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Slide1 />} />
        <Route path="/slide2" element={<Slide2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
