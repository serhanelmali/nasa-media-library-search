import styled from "styled-components";
import Flex from "components/Containers/FlexContainer";
import { SpinnerCircularSplit } from "spinners-react";
const LoadingSpinner = () => {
  return (
    <Container justify="center">
      <SpinnerCircularSplit
        size={100}
        thickness={44}
        speed={134}
        color="rgba(255, 255, 255, 1)"
        secondaryColor="rgba(57, 71, 172, 0.33)"
      />
    </Container>
  );
};

export default LoadingSpinner;

const Container = styled(Flex)`
  background: none;
  backdrop-filter: blur(4px);
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  animation: fadeInBlur 0.5s;

  @keyframes fadeInBlur {
    from {
      backdrop-filter: blur(0px);
    }
    to {
      backdrop-filter: blur(4px);
    }
  }
`;
