import React, { Component } from 'react';
import Header from '../../Components/Header'
import { Container, CorpoCadastro, Agendados } from '../Cadastro/styled'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';
import { Agendar, ExcluirAgendado } from '../../firebase'
import * as firebase from 'firebase'
import { BsFillTrashFill } from "react-icons/bs";

const schema = Yup.object().shape({
  Telefone: Yup.string().required('Telefone é obrigatória!'),
  CEP: Yup.string(),
  compĺemento: Yup.string(),
  troco: Yup.string(),
  numero: Yup.number(),
  cidade: Yup.string().required('Escolha uma Cidade!'),
  formaPagamento: Yup.string().required('Escolha uma Forma de pagamento!'),
  bairro: Yup.string().required('Bairro é obrigatória!'),
  rua: Yup.string().required('Rua é obrigatória!'),
})

class Cadastro extends Component {
  constructor() {
    super();
    const date = new Date()
    const startDate = date.getTime()
    this.state = {
      pedido: [],
      status: [],
      startDate,
      agendamentos: [],
    }
  }



  componentDidMount() {

    var pasta = "Agendados"



    const dadosPedidos = firebase.database().ref(pasta)
    dadosPedidos.on('value', snap => {
      var agendamentos = snap.val()
      if (agendamentos) {
        this.setState({
          agendamentos
        })
      } else {
        return false
      }
    })

  }

  removerAgendamento() {

  }

  renderObj = () => {
    const { agendamentos } = this.state

    return (
      Object.keys(agendamentos).map((obj, i) => {
        console.log('teste 1', agendamentos[obj])
        return (
          <>

            <div key={obj} class="agendamentos"  >

              <h3>{agendamentos[obj].Nome}</h3>

              <div class="dataHora">
                <h4 >Data: {agendamentos[obj].Data}</h4>

                <h4 >Hora: {agendamentos[obj].Hora}</h4>
                <div className="Botao" onClick={() => ExcluirAgendado(obj)} >
                  <BsFillTrashFill />
                </div>

              </div  >

            </div>
          </>
        )
      }))
  }



  handleSubmit({ nome, telefone, doutor, data, hora }) {

    Agendar(nome, telefone, doutor, data, hora)

  }


  render() {


    return (
      <Container >
        <Header />

        <CorpoCadastro >

          <Agendados>

            {this.renderObj()}
          </Agendados>

          <Form onSubmit={this.handleSubmit}>

            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            <Input name="nome" type="text" maxlength="11" placeholder="Nome Paciente" />
            <Input name="telefone" type="tel" placeholder="Telefone" />
            <Input name="doutor" type="text" placeholder="Doutor" />
            <Input name="data" type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder="Data" />
            <Input name="hora" placeholder="Hora" type="time" min="09:00" max="18:00" />

            <button type="submit"  > Agendar </button>

          </Form>





        </CorpoCadastro>
      </Container>
    )
  }

}

export default Cadastro;