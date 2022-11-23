import { lazy, Suspense, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Flex from "components/Containers/FlexContainer";
import SearchBar from "components/Block/SearchBar";
import useSearch from "hooks/useSearch";
import validateSearch from "utils/validateSearch";
import { toast } from "react-toastify";
import LoadingSpinner from "components/Atoms/LoadingSpinner";
import { SpinnerDotted } from "spinners-react";

const ImageThumbnail = lazy(() => import("components/ImageThumbnail"));

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchEnabled, setIsSearchEnabled] = useState(searchParams.has("q"));
  const { searchResults, isLoading, refetch } = useSearch(isSearchEnabled);
  const [searchValue, setSearchValue] = useState("");
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const [page, setPage] = useState();
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const searchButtonHandler = () => {
    if (searchValue.length > 2) searchParams.set("q", searchValue);
    validateSearch(searchValue, startYear, endYear, setErrors);
    if (!errors.length) {
      startYear && searchValue
        ? searchParams.set("year_start", startYear)
        : searchParams.delete("year_start");

      endYear && searchValue
        ? searchParams.set("year_end", endYear)
        : searchParams.delete("year_end");

      page && searchValue
        ? searchParams.set("page", page)
        : searchParams.delete("page");

      if (isSearchEnabled && searchValue.length > 3) refetch();
      if (!isSearchEnabled && searchValue.length > 2) setIsSearchEnabled(true);

      return setSearchParams(searchParams);
    }

    return;
  };

  useEffect(() => {
    if (errors) {
      toast.error(Object.values(errors)[Object.keys(errors).length - 1], {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [errors]);

  return (
    <Flex direction="column">
      <Heading>Nasa Library</Heading>
      <SearchBar
        setSearchValue={setSearchValue}
        setStartYear={setStartYear}
        setEndYear={setEndYear}
        searchButtonHandler={searchButtonHandler}
        errors={errors}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ResultWrapper flexWrap="wrap" justify="center" gap={"20px"}>
          {searchResults?.items?.length
            ? searchResults.items.map((item) => {
                const id = item.data[0].nasa_id;
                return (
                  <Suspense
                    key={id}
                    fallback={
                      <SpinnerDotted color="rgba(255, 255, 255, 0.51)" />
                    }
                  >
                    <div onClick={() => navigate(`/detailed-view?id=${id}`)}>
                      <ImageThumbnail data={item} />
                    </div>
                  </Suspense>
                );
              })
            : searchResults?.items
            ? "Sorry, no results!"
            : ""}
        </ResultWrapper>
      )}
    </Flex>
  );
};

export default Home;

const Heading = styled.h1`
  color: white;
  font-size: 64px;
  margin: 0;
  font-weight: 200;
  text-align: center;
  pointer-events: none;
`;

const ResultWrapper = styled(Flex)`
  padding-block: 20px;
`;
