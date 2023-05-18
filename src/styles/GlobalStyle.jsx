import { createGlobalStyle } from "styled-components";
import breakpoint from "./breakpoint";

const GlobalStyle = createGlobalStyle`

  :root{
    /* Theme */
    --color-dark: #242424;

    /* Spacing */
    --p-1: 5px;
    --p-2: 10px;
    --p-3: 20px;
    --p-4: 40px;

    --flex-gap-1: var(--p-2);
    --flex-gap-2: var(--p-3);;
    --flex-gap-3: var(--p-4);;

    /* Shape */
    --container: 100%;
    --search: 100%;

    --radius-searchbar: 40px; 

    /* Font Size */
    --fs-h1: 36px;
    --fs-h2: 26px;
    --fs-h3: 16px;
    
    --fs-p1: 16px;
    --fs-p2: 14px;
    --fs-p2: 12px; 
  }

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  body {
    height: 100%;
    list-style: none;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  p {
    font-family: "Roboto", sans-serif;
  }




  


  @media ${breakpoint.mobilXs}{
    :root{
      --container: 100%;
      --search: 100%;
    }
  }

  @media ${breakpoint.tabletSm}{
    :root{
      --container: 540px;
      --search: 100%;
    }
  }

  @media ${breakpoint.tabletMd}{
    :root{
      --container: 720px;
      --search: 350px;
    }
  }

  @media ${breakpoint.laptopLg}{
    :root{
      --container: 960px;
      --search: 450px;
    }
  }

  @media ${breakpoint.laptopXlg}{
    :root{
      --container: 1140px;
      --search: 550px;
    }
  }

  @media ${breakpoint.desktopXxlg}{
    :root{
      --container: 1320px;
      --search: 600px;
    }
  }
`;

export default GlobalStyle;
