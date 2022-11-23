import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Flex from "components/Containers/FlexContainer";
import ImageDetail from "components/ImageDetail";
import { Button } from "components/Atoms/Button";
import { MdKeyboardBackspace } from "react-icons/md";

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
      <ImageDetail />
    </Flex>
  );
};

export default DetailView;

const Container = styled(Flex)`
  width: 100%;
`;
const PreviousPageButton = styled(Button)`
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
