import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background: #1E1E1E;
        color: #F9F8F8;
        font-family: monospace;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
    image-rendering: crisp-edges;
    }

`;

export default GlobalStyle;
