import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDwUHqyEz3Xt8hPFLM3yflFtfJXaBFzDw0",
  authDomain: "hackathon-here-86d54.firebaseapp.com",
  databaseURL: "https://hackathon-here-86d54.firebaseio.com",
  projectId: "hackathon-here-86d54",
  storageBucket: "hackathon-here-86d54.appspot.com",
  messagingSenderId: "219832925319"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
