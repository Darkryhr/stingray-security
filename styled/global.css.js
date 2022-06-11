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
        background:  ${({ theme }) => theme.colors.primary};
        color:  ${({ theme }) => theme.colors.text};
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
