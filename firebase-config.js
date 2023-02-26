import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0tACw7ATxNNzHTNVy7TvbZcqAIn9bSm0",
  authDomain: "crud-app-b0205.firebaseapp.com",
  projectId: "crud-app-b0205",
  storageBucket: "crud-app-b0205.appspot.com",
  messagingSenderId: "751258387036",
  appId: "1:751258387036:web:d30b6357950370ad335c99",
  measurementId: "G-L9MT3LWVM1",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = getDatabase();

export { db };
