import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');



*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style-type: none;

}

html,body, #root {
  font-family: 'Ubuntu', sans-serif;
  font: 14px ;
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  background-image: linear-gradient(970deg,#07a4ea,#07a4ea);
}

body, input,header, button {
  font-family: 'Ubuntu', sans-serif;
  font: 14px ;
}

a {
  text-decoration: nome;

}

ul {
  list-style: nome;
}

button {
  cursor: pointer
}

`
