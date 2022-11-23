import { useQuery } from "react-query";
import { getImageCollection } from "utils/requests";

const useFetchImageCollection = (id) => {
  const { data, isLoading, isFetching, error } = useQuery(
    ["imageCollection"],
    () => getImageCollection(id).then((res) => res.data)
  );
  return {
    imageCollection: data,
    isImageCollectionLoading: isLoading,
    isImageCollectionFetching: isFetching,
    error,
  };
};

export default useFetchImageCollection;
