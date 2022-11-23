import styled from "styled-components";

interface IText {
  display?: string;
  fontSize?: string;
}

export const Text = styled.p<IText>`
  display: ${({ display }) => (display === "inline" ? "inline" : "block")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
`;
