import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//	CSS de bootsrap
import 'bootstrap/dist/css/bootstrap.min.css';

//	Ruteador
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcA6J7sFxq26YPMQHQ3lYJWdAYL53jTMk",
  authDomain: "vibeer-96cd7.firebaseapp.com",
  projectId: "vibeer-96cd7",
  storageBucket: "vibeer-96cd7.appspot.com",
  messagingSenderId: "423537977548",
  appId: "1:423537977548:web:8f4364325d748a3dfe3a69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
