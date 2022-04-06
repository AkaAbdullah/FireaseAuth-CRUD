// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAnfdVl4y1sgxuTUvFvtHthD1Jv78_AIzs',
  authDomain: 'zatiblog.firebaseapp.com',
  projectId: 'zatiblog',
  storageBucket: 'zatiblog.appspot.com',
  messagingSenderId: '205275833234',
  appId: '1:205275833234:web:c48973f321ca1df36cd74b',
  measurementId: 'G-NKCTFB85CV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
