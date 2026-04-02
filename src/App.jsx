import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing    from "./pages/Landing";
import Company    from "./pages/Company";
import Learn      from "./pages/Learn";
import Flashcards from "./pages/Flashcards";
import Register   from "./pages/Register";
import Profile    from "./pages/Profile";
import C from "./constants/colors";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Syne', sans-serif",
        background: C.surface,
      }}>
        <Header />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/"           element={<Landing />} />
            <Route path="/company"    element={<Company />} />
            <Route path="/learn"      element={<Learn />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/register"   element={<Register />} />
            <Route path="/profile"    element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
