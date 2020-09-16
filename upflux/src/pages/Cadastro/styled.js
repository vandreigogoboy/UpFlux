import styled from 'styled-components';




export const Container = styled.div`
    margin-top: 64px;
    color:   #f5e61e;

    
    display: flex;
    justify-content: center;
    align-items: center;
  

    .BotaoPadrao {
    margin: 5px 0 0;
      width: 200px;
      align-items: center;
      height: 25px;
      background: #f5e61e;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 16px;
      height: 40px;
      transition: background 0.2;
      margin-top: 15px;
      margin-left: 30px;
      box-shadow: 0px 0px 5px #000;
      :hover {
        transition: 0.6s;


        -webkit-transform: rotateZ(-0deg) scale(1.1);
        -ms-transform: rotateZ(-0deg) scale(1.1);
        transform: rotateZ(-0deg) scale(1.1);
        transition: 0.6s;
        }

  }


`

export const CorpoCadastro = styled.div`
  
margin-top: 64px;
grid-gap: 50px;
list-style: none;
display: grid;
grid-template-columns: 400px 400px;
  
  
  

  
    form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    

    Input {
      background: rgba(0, 0, 0, 0.5);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
       color: rgba(255, 255, 255, 0.7)
      }
    }

   

    button {
      margin: 5px 0px 20px;
      height: 44px;
      background: #f5e61e;
      font-weight: bold;
      color: #fff;
      border: 0px;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2;

      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    }
    `

export const Agendados = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: #fff;

  .Botao {
       
        cursor: pointer;
        margin-left: 30%;

      }
  .agendamentos {
    
    background: rgba(0, 0, 0, 0.5);
    margin: 5px;
    padding: 5px;

    .dataHora {
      display:flex;
      h4 {
        margin-left: 5px;
      }

   

    }
  }
`


