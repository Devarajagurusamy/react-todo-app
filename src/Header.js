import React from 'react';
import SearchItem from "./SearchItem";


const Header = ({ title,search,setSearch }) => {
    return (
        <header>
            <h1>{title}</h1>
            <SearchItem
              search = {search}
              setSearch = {setSearch}
            />
  

        </header>
    );
};

Header.defaultProps = {
    title: "To Do Lists"
};

export default Header;
