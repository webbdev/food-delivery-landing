import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/sections/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/sections/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Accessibility from "./pages/Accessibility";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;