import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAcg8MxG_x2YiTyV2fAoH9tuyHUn85JqNQ",
    authDomain: "test-form-f2df9.firebaseapp.com",
    databaseURL: "https://test-form-f2df9.firebaseio.com",
    projectId: "test-form-f2df9",
    storageBucket: "test-form-f2df9.appspot.com",
    messagingSenderId: "684444083467",
    appId: "1:684444083467:web:9e3134e8e566638242ae0e",
    measurementId: "G-NYNSC1FB6G"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase