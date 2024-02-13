import "./Header.scss";
import { Container, Search } from "../../components/index";

const Header = ({onSearch}) => {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <a className="header__logo" href="/">
            Weather App
          </a>
          <Search onSearch={onSearch} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
