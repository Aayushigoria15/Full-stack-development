
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBY8UYD5zKKRZtgW1YuAtB1hIzYSrWlOXI",
    authDomain: "tour-c7b01.firebaseapp.com",
    projectId: "tour-c7b01",
    storageBucket: "tour-c7b01.firebasestorage.app",
    messagingSenderId: "916077684716",
    appId: "1:916077684716:web:4f5bf31d9ad5d3639682c9",
    measurementId: "G-WGBRSQLRDC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fireDb = getFirestore(app)