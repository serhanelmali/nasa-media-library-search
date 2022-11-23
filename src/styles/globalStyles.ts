import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    font-family: 'Exo 2', sans-serif !important;
    color: white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export default GlobalStyle;
