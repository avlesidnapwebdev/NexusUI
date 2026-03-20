import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Components from "./pages/components";
import Templates from "./pages/templates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/components/:type" element={<Components />} />
    </Routes>
  );
}

export default App;