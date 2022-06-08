/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "todo-app-eacd7",
  apiKey: "AIzaSyDLyzUc9YfsgC2fHyiWEOkeDoWVfyKoiFU",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
