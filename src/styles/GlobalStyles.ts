import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --light-gray: #f5f5f6;
        --barlow: 'Barlow', sans-serif;
        --roboto: 'Roboto', sans-serif;
        --text-secondary: #676C7E;


        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    body {
        font-family: var(--roboto);
        background-color: var(--light-gray);
        height: 100vh;
    }

    main, section {
        height: 100%;
        width: 100%;
    }

    #root {
        height: 100%;
        width: 100%;
    }
    
`;

export default GlobalStyles;
