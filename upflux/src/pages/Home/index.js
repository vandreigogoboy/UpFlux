import React, { Component } from 'react';
import Header from '../../Components/Header'
import { Container, CorpoHome } from '../Home/styled'

class Home extends Component {
  state = {

  }



  render() {


    return (
      <Container >
        <Header />
        <h2>Agendamentos</h2>

        <a className="botao" href="/Cadastro"><button className="BotaoPadrao">AGENDAR</button></a>
        <CorpoHome >

        </CorpoHome>
      </Container>
    )

  }

}

export default Home;