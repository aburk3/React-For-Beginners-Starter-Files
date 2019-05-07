import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDBdbCaAYc7hDmltGy9JKDG3QcWUeKWgt0",
  authDomain: "catch-of-the-day-austin-burke.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-austin-burke.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
