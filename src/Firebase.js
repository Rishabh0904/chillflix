import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyCSL6q_zWGlMg-oqIr4xbcuyEo1ZhKRWnk",
    authDomain: "fir-ba4b8.firebaseapp.com",
    projectId: "fir-ba4b8",
    storageBucket: "fir-ba4b8.appspot.com",
    messagingSenderId: "785295206615",
    appId: "1:785295206615:web:ff17d282d6b270e9532892"
      }
)

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();