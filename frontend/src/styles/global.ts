import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

:root {
    --primary-color: #35356c;
    --secondary-color: #28264f;
    --title-color: #edeff2;
    --text-color: #5c5a99;
    --success: #9cff57;
    --error: #ff5757;
}
`;
