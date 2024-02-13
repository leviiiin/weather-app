import "./Home.scss";
import { Container } from "../../components/index";
import { Header, Weather } from "../../layouts/index";
import { useState } from "react";

const Home = () => {
  const [city, setCity] = useState("Odesa");

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };
  
  return (
    <>
      <Header onSearch={handleSearch} />
      <Container>
        <Weather city={city} />
      </Container>
    </>
  );
};

export default Home;
