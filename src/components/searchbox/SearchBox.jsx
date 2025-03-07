import style from "./SearchBox.module.css";

const SearchBox = ({ searchBoxValue, setSearchBoxValue }) => {
  const onSearchBoxChange = (event) => {
    setSearchBoxValue(event.target.value);
  };

  return (
    <div className={style.SearchBoxWrapper}>
      <label htmlFor="">Find contacts by name</label>
      <input value={searchBoxValue} onChange={onSearchBoxChange} type="text" />
    </div>
  );
};

export default SearchBox;
