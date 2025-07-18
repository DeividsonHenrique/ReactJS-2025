import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #0C1117;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }
`;
