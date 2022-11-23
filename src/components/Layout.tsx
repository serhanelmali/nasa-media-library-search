import styled from "styled-components";
import Flex from "./Containers/FlexContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: any) => {
  const renderBackground = () => {
    return (
      <BackgroundContainer>
        <Stars />
        <Twinklings />
        <Clouds />
      </BackgroundContainer>
    );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {renderBackground()}
      <Main justify="center">{children}</Main>
    </>
  );
};

export default Layout;

const Asset = styled.div`
  display: block;
  height: 100%;
  inset: 0;
  position: fixed;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  inset: 0;
`;

const Clouds = styled(Asset)`
  animation: move-clouds-back 1000s linear infinite;
  background: url(clouds.png) repeat top center;
  opacity: 0.25;
  transform: scale(2);
  z-index: 2;

  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
`;

const Twinklings = styled(Asset)`
  animation: move-twinkle-back 200s linear infinite;
  background: url(twinkling.png) repeat top center;
  z-index: 1;

  @keyframes move-twinkle-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
`;

const Stars = styled(Asset)`
  background: #000 url(stars.png) repeat top center;
  z-index: 0;
`;

const Main = styled(Flex)`
  height: 100vh;
  padding: 4rem;
`;
