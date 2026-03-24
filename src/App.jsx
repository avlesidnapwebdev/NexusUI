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
      <Route path="/GettingStarted/:type" element={<Components />} />
      <Route path="/Buttons/:type" element={<Components />} />
      <Route path="/Cards/:type" element={<Components />} />
      <Route path="/FeedbackToastNotification/:type" element={<Components />} />
      <Route path="/Filters/:type" element={<Components />} />
      <Route path="/Forms/:type" element={<Components />} />
      <Route path="/Layouts/:type" element={<Components />} />
      <Route path="/TextAnimation/:type" element={<Components />} />
      <Route path="/BackgroundEffects/:type" element={<Components />} />
      <Route path="/Projects/:type" element={<Components />} />
      <Route path="/Utilities/:type" element={<Components />} />
    </Routes>
  );
}

export default App;