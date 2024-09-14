import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Context";

function App() {
  const { state } = useContextGlobal();
  return (
    <div className={`App ${state.theme ? "" : "dark"}`}>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
