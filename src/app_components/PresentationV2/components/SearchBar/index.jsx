import { useRef } from "react";
import { Search } from "react-feather";

import practitioners from "../../../../shared/data/practitioners.data";
import searchAlgortithm from "./utils/searchAlgortithm";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import { useCallback } from "react";

const SearchBar = () => {
    const searchRef = useRef(null);

    const [hasSearchResults, setHasSearchResults] = useState(false);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearchSubmit = useCallback((e) => {
        e.preventDefault();

        const searchValue = searchRef.current.value;

        if (searchValue.length === 0) {
            setHasSearchResults(false);
            setSearchResults([]);
            return;
        }

        const result = searchAlgortithm(searchValue, practitioners);

        if (result.length > 0) {
            setHasSearchResults(true);
            setSearchResults(result);
        } else {
            setHasSearchResults(false);
            setSearchResults([]);
        }
    }, [searchRef]);

    return <div className="flex items-center gap-4">
        <form onSubmit={(e) => handleSearchSubmit(e)} className="w-full">
            <div className="flex gap-3 relative h-11">
                <input
                    ref={searchRef}
                    className={`
                h-11 relative
                bg-white shadow-sm
                text-slate-900
                border-slate-300
                border border-solid box-border
                focus:border-indigo-500 focus:shadow-outline-indigo
                focus:ring focus:ring-indigo-400 duration-100
                focus:outline-none
                rounded-lg
                placeholder:text-sm
                max-w-xs w-full
                placeholder-slate-400
                disabled:bg-slate-100 disabled:text-slate-400 disabled:select-none
                text-base px-3`}
                    type="search"
                    spellCheck={false}
                    disabled={false}
                    required={false}
                    onChange={(e) => handleSearchSubmit(e)}
                    placeholder="Search a practitioner for Free session"
                />
                <button
                    type="submit"
                    className="h-11 w-11 bg-white text-indigo-600 rounded-lg flex items-center justify-center"
                >
                    <Search />
                </button>
                {
                    hasSearchResults && <SearchResults results={searchResults} />
                }
            </div>
        </form>
    </div>;
};

export default SearchBar;