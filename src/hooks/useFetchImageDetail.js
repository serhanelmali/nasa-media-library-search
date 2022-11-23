import { useQuery } from "react-query";
import { getImageDetails } from "utils/requests";

const useFetchImageDetail = (id) => {
  const { data, isLoading, isFetching, error } = useQuery(
    ["imageDetails"],
    () =>
      getImageDetails(id).then((res) => res.data.collection.items[0].data[0])
  );
  return { data, isLoading, isFetching, error };
};

export default useFetchImageDetail;
