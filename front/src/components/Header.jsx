/* eslint-disable no-unused-vars */
import { useContext } from "react";
import Context from "../context/Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { searchBook } = useContext(Context);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    searchBook(searchTerm);
  };

  return (
    <>
      <div className="header">
        <h1>BOOKboky</h1>
        <div className="input-head">
          <input
            type="text"
            onChange={handleSearch}
            value={search}
            placeholder="input search keyword"
          />
          <button onClick={() => navigate("/add")}>New book</button>
        </div>
      </div>
    </>
  );
};

export default Header;
