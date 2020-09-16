import styled from 'styled-components';


export const Container = styled.div`
    margin-top: 64px;
    color:   #f5e61e;

    h2 {
        text-align: center;
    }


    .botao {
      
    }

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

export const CorpoHome = styled.div`
    

    display: grid;
    grid-gap: 20px;
    list-style: none;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    width: 100%;
    padding: 4%;

  


`