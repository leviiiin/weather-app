import "./Home.scss";
import { Container } from "../../components/index";
import { Weather } from "../../modules/index";

const Home = (props) => {
  return (
    <>
      <Container>
        <Weather city={props.city} />
      </Container>
    </>
  );
};

export default Home;
