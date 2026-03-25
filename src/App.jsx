import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Templates.css";

import Home from "./pages/Home";
import Templates from "./pages/Templates";
import About from "./pages/About";
import FormPage from "./pages/Formpage";
import DownloadPage from "./pages/DownloadPage";
import HistoryPage from "./pages/HistoryPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
         <Route path="/form/:templateId" element={<FormPage />} />
         <Route path="/history" element={<HistoryPage />} />
          <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;