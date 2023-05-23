import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styled";
import { useContext, useEffect, useState } from "react";
import { SearchQueryContext } from "../../App";

export default function Search() {
  const { setQueryContext } = useContext(SearchQueryContext);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setQueryContext(searchQuery);
  }, [searchQuery, setQueryContext]);

  function onQuerySearch(e) {
    const searchInput = e.target;
    const searchQueryValue = searchInput.value;
    setSearchQuery(searchQueryValue);
  }

  return (
    <styled.SearchForm>
      <styled.SearchInput
        type="text"
        name="search"
        placeholder="ex: Samsung Galaxy A4"
        onChange={onQuerySearch}
      />
      <styled.SearchIcon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </styled.SearchIcon>
    </styled.SearchForm>
  );
}
