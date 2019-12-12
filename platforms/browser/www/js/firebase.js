// Inicialización API Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBywpQ-N5RkQQNYRgROJDy-FxILVFylPWQ",
    authDomain: "amov-admin.firebaseapp.com",
    databaseURL: "https://amov-admin.firebaseio.com",
    projectId: "amov-admin",
    storageBucket: "amov-admin.appspot.com",
    messagingSenderId: "28928820172",
    appId: "1:28928820172:web:91c0507e6a243820901369"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();