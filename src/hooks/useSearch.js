import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { searchImages } from "utils/requests";

const useSearch = (isSearchEnabled) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchParams.has("q")) {
      setSearchValue(searchParams.get("q"));
    }
    if (searchParams.has("page")) {
      setPage(searchParams.get("page"));
    }
  }, [searchParams, setSearchParams]);

  const {
    data: searchResults,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery(
    ["images", { page, searchValue }],
    () => {
      let urlParams = `media_type=image&page=${page}`;

      if (searchValue) urlParams += `&q=${encodeURIComponent(searchValue)}`;

      return searchImages(urlParams).then((res) => res.data.collection);
    },
    {
      staleTime: 1000 * 60 * 5,
      enabled: isSearchEnabled,
    }
  );
  return { searchResults, isLoading, isFetching, error, refetch };
};

export default useSearch;
