import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCRLDsaozdpPYezmMmpP05uVlSXUFsfyDQ",
  authDomain: "upflux.firebaseapp.com",
  databaseURL: "https://upflux.firebaseio.com",
  projectId: "upflux",
  storageBucket: "upflux.appspot.com",
  messagingSenderId: "255019715488",
  appId: "1:255019715488:web:8310f524eb3322db6df2c5"
};

firebase.initializeApp(firebaseConfig);

export function Agendar(nome, telefone, doutor, dataAgendada, horaAgendada) {
  let data = new Date();
  let dia = data.getDate()
  let mes = (data.getMonth() + 1)
  let ano = data.getFullYear()


  firebase.database().ref('Agendamentos/').child(ano).child(mes).child(dia).child(nome + "-" + telefone).set({


    Nome: nome,
    Telefone: telefone,
    Doutor: doutor,
    Data: dataAgendada,
    Hora: horaAgendada,

  });

  firebase.database().ref('Agendados/').child(nome + "-" + telefone).set({


    Nome: nome,
    Telefone: telefone,
    Doutor: doutor,
    Data: dataAgendada,
    Hora: horaAgendada,

  });


}

export function ExcluirAgendado(id) {



  firebase.database().ref('Agendados/').child(id).remove();


}

export default firebase