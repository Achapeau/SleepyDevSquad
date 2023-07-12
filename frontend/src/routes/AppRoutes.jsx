import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Informations from "../pages/Informations";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";
import Page6 from "../pages/Page6";
import Page7 from "../pages/Page7";
import NotFound from "../pages/NotFound";
import Page8 from "../pages/Page8";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/informations/" element={<Informations />} />
      <Route path="/Page3/" element={<Page3 />} />
      <Route path="/Page4/" element={<Page4 />} />
      <Route path="/Page5/" element={<Page5 />} />
      <Route path="/Page6/" element={<Page6 />} />
      <Route path="/Page7/" element={<Page7 />} />
      <Route path="/Page8/" element={<Page8 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
