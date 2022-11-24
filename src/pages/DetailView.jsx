import { SpinnerDotted } from "spinners-react";
import { lazy, Suspense } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import Flex from "components/Containers/FlexContainer";
import { Button } from "components/Atoms/Button";
const ImageDetail = lazy(() => import("components/ImageDetail"));

const DetailView = () => {
  const navigate = useNavigate();

  return (
    <Flex direction="column" align="center" flex={1}>
      <Container>
        <Flex flex={1}>
          <PreviousPageButton onClick={() => navigate(-1)}>
            <MdKeyboardBackspace fontSize="4rem" />
          </PreviousPageButton>
        </Flex>
      </Container>
      <Suspense fallback={<SpinnerDotted color="rgba(255, 255, 255, 0.51)" />}>
        <ImageDetail />
      </Suspense>
    </Flex>
  );
};

export default DetailView;

const Container = styled(Flex)`
  width: 100%;
  max-width: 1024px;
`;
const PreviousPageButton = styled(Button)`
  color: white;
  cursor: pointer;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 5;

  &:hover {
    transform: scale(1.1);
  }
`;
