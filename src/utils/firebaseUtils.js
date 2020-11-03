import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDH0GHWmuBPgxeixsDQU8nuTakG-gq2m5A",
  authDomain: "controle-invests.firebaseapp.com",
  databaseURL: "https://controle-invests.firebaseio.com",
  projectId: "controle-invests",
  storageBucket: "controle-invests.appspot.com",
  messagingSenderId: "881272511771",
  appId: "1:881272511771:web:f8d1497683acbb68d2c7be"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
