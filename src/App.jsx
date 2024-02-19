import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/index";
import { Header } from "./layouts/index";
import { useState } from "react";
import "./styles/index.scss";

function App() {
  const [city, setCity] = useState("Odesa");

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home city={city} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
