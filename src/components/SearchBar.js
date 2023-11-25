import { useState } from "react";
import './SearchBar.css';
function SearchBar({ onSearch }) {


  const [term,setTerm] = useState('');

  const clickHandler = (event) => {
   event.preventDefault();
    onSearch(term);
  };

  const changeHandler = (event) =>
  {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={clickHandler}>
      <label>Enter Search Term</label>
        <input value ={term} onChange={changeHandler}/>
      </form>
    </div>
  );
}

export default SearchBar;
