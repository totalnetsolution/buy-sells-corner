
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyDx1QE72wY3-iqB5h4g82wqPtHhlRj8J78",
    authDomain: "buy-sells-corner-bc2e9.firebaseapp.com",
    projectId: "buy-sells-corner-bc2e9",
    storageBucket: "buy-sells-corner-bc2e9.appspot.com",
    messagingSenderId: "134021368062",
    appId: "1:134021368062:web:484e842e914e5afe073daf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
