import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    &::-webkit-scrollbar {
    width: 0px;
    }
  }
  li {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
  }
  label {
    display: block;
  }
`;

export default GlobalStyle;
