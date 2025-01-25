import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from 'dotenv';

dotenv.config();

import serviceAccount from "../firebase.json" with {type: "json"};

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://venushacks2024-1d119-default-rtdb.firebaseio.com"
});

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

//onst app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//console.log(db)


