import { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "components/Containers/FlexContainer";
import { Button } from "components/Atoms/Button";
import Input from "components/Atoms/Input";
import SearchIcon from "components/Assets/SearchIcon";

const SearchBar = ({
  setSearchValue,
  setStartYear,
  setEndYear,
  searchButtonHandler,
  errors,
}) => {
  return (
    <Container direction="column" justify="center" align="center">
      <SearchBox>
        <Flex gap={"12px"}>
          <Flex align="flex-start" gap={"6px"} direction="column">
            <SearchInput
              placeholder="1920"
              size={"sm"}
              maxLength="4"
              onChange={(event) => setStartYear(event.target.value)}
              isError={errors?.startYear}
            />
            <SearchInput
              placeholder="2022"
              size={"sm"}
              maxLength="4"
              onChange={(event) => setEndYear(event.target.value)}
              isError={errors?.endYear}
            />
          </Flex>
          <SearchInput
            placeholder="Search by keywords *"
            onChange={(event) => setSearchValue(event.target.value)}
            isError={errors?.searchValue}
          />
          <SearchButton
            onClick={(event) => {
              event.preventDefault();
              searchButtonHandler();
            }}
          >
            <SearchIcon />
          </SearchButton>
        </Flex>
      </SearchBox>
    </Container>
  );
};

export default SearchBar;

const Container = styled(Flex)`
  margin: 40px;
`;

const SearchBox = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  position: relative;
`;

const SearchInput = styled(Input)`
  border-radius: 4px;
  height: ${({ size }) => (size === "sm" ? "25px" : "56px")};
  width: ${({ size }) => (size === "sm" ? "50px" : "300px")};
  outline: none;
  color: white;
  font-size: ${({ size }) => (size === "sm" ? "14px" : "18px")};
  padding: ${({ size }) => (size === "sm" ? "0 .5rem" : "0 1rem")};
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(2px);
  border: 1px solid
    ${({ isError }) => (isError ? "#e74c3c;" : "rgba(255, 255, 255, 0.18)")};
  animation: ${({ size, isError }) =>
    size === "sm"
      ? isError
        ? "shake 0.5s"
        : "none"
      : `fadeInOut 0.8s ease-in-out infinite alternate ${
          isError && ", shake 0.5s"
        }`};

  &:focus {
    border: 2px solid white;
    animation: none;
  }

  @media (max-width: 568px) {
    width: ${({ size }) => (size === "sm" ? "50px" : "150px")};
  }

  @keyframes fadeInOut {
    from {
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    to {
      border: 1px solid
        ${({ isError }) => (isError ? "#e74c3c;" : "rgba(255, 255, 255, 0.5)")};
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const SearchButton = styled(Button)`
  align-items: center;
  backdrop-filter: blur(3px);
  background: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 4px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;
  outline: none;
  transition: 0.3s;
  width: 50px;

  &:hover {
    animation: pulse 1s infinite;
    background: white;
    color: black;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;
