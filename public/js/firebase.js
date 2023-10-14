const firebaseConfig = {
    apiKey: "AIzaSyAV4g36E5y4_1semXhYQHNbAstVNaymy0E",
    authDomain: "blogswebsite-70aa0.firebaseapp.com",
    projectId: "blogswebsite-70aa0",
    storageBucket: "blogswebsite-70aa0.appspot.com",
    messagingSenderId: "397792267412",
    appId: "1:397792267412:web:e383ac12bffe3475fbf881"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

let db = app.firestore();