import styled from "styled-components";

export const Text = styled.p`
  display: ${({ display }) => (display === "inline" ? "inline" : "block")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
`;
