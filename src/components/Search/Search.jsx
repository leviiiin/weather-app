import { useState } from "react";
import { Input, Button } from "../index";
import "./Search.scss";

const Search = ({onSearch}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue)
  };

  return (
    <>
      <form className="search__form" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your City"
          className="search__input"
        />
        <Button type="submit" theme="primary" className="search__btn">
          <i className="bi bi-search"></i>
        </Button>
      </form>
    </>
  );
};

export default Search;
