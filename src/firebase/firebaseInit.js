// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZjonzTPO-cOdCFirAWOVASRVrcGF-rcM',
  authDomain: 'invoice-app-b8812.firebaseapp.com',
  projectId: 'invoice-app-b8812',
  storageBucket: 'invoice-app-b8812.appspot.com',
  messagingSenderId: '747628880382',
  appId: '1:747628880382:web:802ec83dbeb9ca19ff60af',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
export default db
