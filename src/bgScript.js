

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDo-qSjbEs0CKFvmm9tTnslyTlNC0Ax_BY",
  authDomain: "portfolio-17f7d.firebaseapp.com",
  projectId: "portfolio-17f7d",
  storageBucket: "portfolio-17f7d.appspot.com",
  messagingSenderId: "1027992157584",
  appId: "1:1027992157584:web:ac88fabd8637600c328715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const database = getDatabase();

//listen for submit event

// this following line helps us access the elements of the form

document.getElementById("myForm").addEventListener('submit', formSubmit);

 
