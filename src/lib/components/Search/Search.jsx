import "./Search.css";
import React, { useEffect, useState } from "react";

const Search = ({
    formClassName = [],
    formAutoComplete = "off",
    btnContent = "Search",
    btnAria = "search button",
    placeholder = "Search...",
    inputName = "search",
    inputId = "search",
    searchType = "submit", // submit/change/both
    data,
    setData,
    originData
}) => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (searchValue.length > 0 && (searchType === "change" || searchType === "both")) {
            handleSearch();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, setSearchValue])

    const handleSearch = () => {
        if (data && setData) {
            const searchResult = originData.filter(row => Object.values(row).some(cellValue => cellValue.toString().toLowerCase().includes(searchValue.toLowerCase())));

            setData(searchResult);
        }
    }

    const handleReset = (e) => {
        if (setData && originData && e.target.value.length === 0) {
            setData(originData);
        }
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchType === "submit" || searchType === "both") {
            handleSearch();
        }
    }

    return (
        <form className={`search-bar${(formClassName.length > 0) ? ` ${formClassName.join(" ")}` : "" }`} onSubmit={(e) => handleSubmit(e)} autoComplete={formAutoComplete}>
            <input type="search" value={searchValue} onChange={(e) => handleChange(e)} onInput={(e) => handleReset(e)} placeholder={placeholder} name={inputName} id={inputId} />
            <button aria-label={btnAria}>{btnContent}</button>
        </form>
    );
}

export default Search;