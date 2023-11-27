import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after { 
  box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;    
    cursor: pointer;
}

html,
body {
    height: 100%;    
 background-color:black
}

button {
    cursor: pointer;
}
`;
