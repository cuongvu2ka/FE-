import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  // Thay đổi thông tin kết nối tới Firebase của bạn ở đây
  apiKey: "AIzaSyDUooypLIMucEKlA3T_sc8CSiXrlZZqQRg",
  authDomain: "react-asm-32b5f.firebaseapp.com",
  projectId: "react-asm-32b5f",
  storageBucket: "react-asm-32b5f.appspot.com",
  messagingSenderId: "72516151596",
  appId: "1:72516151596:web:478c7cc3363058ffe4e489",
  measurementId: "G-1FFJRRWF79",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
