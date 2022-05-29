import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background: #1E1E1E;
        color: #fff;
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
