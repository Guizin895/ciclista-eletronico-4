import firebase from "firebase";
require("@firebase/firestore");


  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyCn54-QUgmYvoDnAoO09NsFW1ktahHHUv0",
    authDomain: "ciclistaeletronico-aeb83.firebaseapp.com",
    projectId: "ciclistaeletronico-aeb83",
    storageBucket: "ciclistaeletronico-aeb83.appspot.com",
    messagingSenderId: "20184064256",
    appId: "1:20184064256:web:9d7df9fc5bf668a2a493e5"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
