import { useSearchParams } from "react-router-dom";
import useFetchImageDetail from "hooks/useFetchImageDetail";
import Flex from "./Containers/FlexContainer";
import styled from "styled-components";
import LoadingSpinner from "./Atoms/LoadingSpinner";
import useFetchImageCollection from "hooks/useFetchImageCollection";
import { Gradient } from "./Atoms/Gradient";
import { Text } from "./Atoms/Text";

const ImageDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data, isLoading, isFetching } = useFetchImageDetail(id);
  const {
    imageCollection,
    isImageCollectionLoading,
    isImageCollectionFetching,
  } = useFetchImageCollection(id);

  const renderImageBottomText = (fieldName, fieldInfo) => {
    return (
      <ImageBottomText>
        <i>{fieldName}:</i> {fieldInfo}
      </ImageBottomText>
    );
  };

  return (
    <Container justify="center" align="center" gap={"1rem"} direction="column">
      {isLoading ||
      isImageCollectionLoading ||
      isFetching ||
      isImageCollectionFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <ImageWrapper justify="center" align="center">
            <Image src={imageCollection[1]} />
            <Gradient />
            <ImageBottomField justify="space-between">
              {data.title && renderImageBottomText("Title", data.title)}
              {data.location &&
                renderImageBottomText("Location", data.location)}
            </ImageBottomField>
          </ImageWrapper>
          <InfoFieldWrapper direction="column" gap={"1rem"}>
            {data.description && (
              <Text fontSize="12px">{data.description}</Text>
            )}
            {data.photographer && <Text>{data.photographer}</Text>}
            {data.date && <Text>{data.date}</Text>}
            {data.keywords && (
              <KeywordsWrapper flexWrap="wrap" justify="center">
                {data.keywords.map((keyword, index) => (
                  <ImageBottomText key={index}>#{keyword}</ImageBottomText>
                ))}
              </KeywordsWrapper>
            )}
          </InfoFieldWrapper>
        </>
      )}
    </Container>
  );
};

export default ImageDetail;

const Container = styled(Flex)`
  max-width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const ImageWrapper = styled(Flex)``;
const Image = styled.img`
  border-radius: 6px;
  max-width: 100%;
`;

const ImageBottomField = styled(Flex)`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 12px;
  width: 100%;
`;

const ImageBottomText = styled.span`
  font-size: 12px;
  margin-right: 2px;
`;

const InfoFieldWrapper = styled(Flex)`
  text-align: center;
  height: 100%;
  width: 100%;
  p {
    margin: 0;
  }
`;

const KeywordsWrapper = styled(Flex)``;
