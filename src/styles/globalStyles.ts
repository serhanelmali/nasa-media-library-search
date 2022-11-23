import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;500;700&family=IBM+Plex+Serif:wght@300;400;700&display=swap');
    color: white;
    font-family: 'Exo 2', sans-serif;
    margin: 0;
    padding: 0;box-sizing: border-box;
}
`;

export default GlobalStyle;
