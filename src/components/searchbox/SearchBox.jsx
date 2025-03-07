import style from "./SearchBox.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({ searchBoxValue, setSearchBoxValue }) => {
  const onSearchBoxChange = (event) => {
    setSearchBoxValue(event.target.value);
  };

  return (
    <div className={style.SearchBoxWrapper}>
      <CiSearch className={style.searchIcon} />
      <input
        placeholder="Search"
        className={style.contactInput}
        value={searchBoxValue}
        onChange={onSearchBoxChange}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
