import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUu-JqJaMeI64c4fjpgxlQe6NX4bvmnzU",
  authDomain: "cooking-recipies-a2819.firebaseapp.com",
  projectId: "cooking-recipies-a2819",
  storageBucket: "cooking-recipies-a2819.appspot.com",
  messagingSenderId: "1089872095477",
  appId: "1:1089872095477:web:2102b343470f5ae3023dbc",
};

initializeApp(firebaseConfig);
export const projectFirestore = getFirestore();
