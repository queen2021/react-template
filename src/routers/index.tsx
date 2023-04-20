import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/about/about";
import About from "../pages/home/home";
import NotFound from "../pages/NotFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
