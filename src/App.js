import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import ItemPage from "./pages/ItemPage/ItemPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/item/:uuid" element={<ItemPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
