import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styled";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import Spinner from "../../shared/Spinner";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  // Saves query when user searches
  function onQuerySearch(e) {
    const searchInput = e.target;
    const searchQueryValue = searchInput.value;
    setSearchQuery(searchQueryValue);
  }

  // Getting product list from api
  const API_URL = "https://api.noroff.dev/api/v1/online-shop/";

  const { data, isLoading } = useApi(API_URL);

  const products = data;

  // Filters products list based on query match
  const filteredProducts = products.filter((product) => {
    const title = product.title.toLowerCase();
    const lowerCaseSearchTerm = searchQuery.toLowerCase();

    return title.includes(lowerCaseSearchTerm) && searchQuery !== "";
  });

  let isTermMatch = false;

  // Checks wether the querysearch is matching with any products listed
  filteredProducts.length === 0 ? (isTermMatch = false) : (isTermMatch = true);

  return (
    <styled.SearchForm>
      <styled.SearchInput
        type="text"
        name="search"
        placeholder="ex: USB charger cable"
        onChange={onQuerySearch}
      />
      <styled.SearchIcon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </styled.SearchIcon>
      <styled.SearchResults $isSearch={searchQuery} $isTermMatch={isTermMatch}>
        <Spinner loadingState={isLoading} />
        {filteredProducts.map((product, index) => (
          <styled.SearchResult
            key={index}
            href={`/ProductPage/${product.title.replace(/\s+/g, "-")}?id=${
              product.id
            }`}
          >
            <p>{product.title}</p>
          </styled.SearchResult>
        ))}
      </styled.SearchResults>
    </styled.SearchForm>
  );
}
