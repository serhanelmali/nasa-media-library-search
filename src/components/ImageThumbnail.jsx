import styled from "styled-components";
import Flex from "./Containers/FlexContainer";
import { MdPhotoCameraFront, MdShareLocation } from "react-icons/md";
import { SpinnerCircularSplit } from "spinners-react";
import { Gradient } from "./Atoms/Gradient";

const ImageThumbnail = ({ data }) => {
  const imageInfos = data.data[0];

  return (
    <Container direction="column" justify="flex-start">
      <ThumbnailWrapper>
        <Gradient />
        <ThumbnailImage src={data.links[0].href} />
        <ThumbnailTextWrapper direction="column">
          <ThumbnailText>{imageInfos.title}</ThumbnailText>
        </ThumbnailTextWrapper>
      </ThumbnailWrapper>
      <CardBottomWrapper justify="space-around">
        <BottomItemWrapper direction="column" flex={1} isBorder align="center">
          <MdPhotoCameraFront fontSize="1.5em" />
          <BottomItemText>
            {imageInfos.photographer
              ? imageInfos.photographer
              : "No photographer"}
          </BottomItemText>
        </BottomItemWrapper>
        <BottomItemWrapper direction="column" flex={1} align="center">
          <MdShareLocation fontSize="1.5em" />
          <BottomItemText>
            {imageInfos.location ? imageInfos.location : "No location "}
          </BottomItemText>
        </BottomItemWrapper>
        <Gradient />
      </CardBottomWrapper>
    </Container>
  );
};

export default ImageThumbnail;

const Container = styled(Flex)`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  background: #1f1a19;
  cursor: pointer;
  width: 250px;
  height: 300px;
  transition: 0.1s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.8);
    z-index: 5;
  }
`;

const ThumbnailWrapper = styled(Flex)`
  flex: 5;
`;

const ThumbnailImage = styled.img`
  border-radius: 2px;
  height: 200px;
  object-fit: cover;
  width: 100%;
`;

const ThumbnailTextWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 12px;
`;

const ThumbnailText = styled.span`
  font-size: 12px;
`;

const CardBottomWrapper = styled(Flex)`
  flex: 4;
  padding: 12px;
`;

const BottomItemWrapper = styled(Flex)`
  border-right: ${({ isBorder }) =>
    isBorder ? "1px solid rgba(177, 177, 177, 0.11)" : "0"};
  text-align: center;
`;

const BottomItemText = styled(ThumbnailText)`
  padding: 8px;
  margin: auto;
  opacity: 0.7;
`;
