import styled from "styled-components";

const Flex = styled.div<{
  align?: string;
  direction?: string;
  flexWrap?: string;
  gap?: string;
  justify?: string;
  flex?: number;
}>`
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  display: flex;
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  position: relative;
`;

export default Flex;
