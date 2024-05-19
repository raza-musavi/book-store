/* eslint-disable no-unused-vars */
import { useContext } from "react";
import Context from "./Context";
import { useState } from "react";

const Header = () => {
  const { searchBook } = useContext(Context);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    searchBook(searchTerm);
  };

  return (
    <>
      <div className="header">
        <h1>BOOKboky</h1>
        <div>
          <button>search</button>
          <input
            type="text"
            onChange={handleSearch}
            value={search}
            placeholder="input search keyword"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
