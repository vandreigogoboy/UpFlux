import React, { Component } from 'react';
import { Container } from './styled'


class Header extends Component {


  render() {
    return (
      <Container >
        <nav className="navegation">
          <div className="icone">


          </div>
          <div></div>
          <div className="espaco" />
          <div className="navegation_itens">
            <ul>
              <li><a href="/" className="botao">Agendamentos</a></li>
              <li><a href="/Serviços" className="botao">Serviços</a></li>
            </ul>
          </div>
        </nav>
      </Container>
    );
  }
}

export default Header;