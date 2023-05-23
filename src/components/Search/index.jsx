import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styled";

export default function Search() {
  return (
    <>
      <styled.SearchForm>
        <styled.SearchInput
          type="text"
          name="search"
          placeholder="ex: Samsung Galaxy A4"
        />
        <styled.SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </styled.SearchIcon>
      </styled.SearchForm>
    </>
  );
}
