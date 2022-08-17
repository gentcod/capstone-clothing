import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAxfqoYyZZWzapLjMKd-03LoDxtM3FXfnw",
   authDomain: "capstone-gentcod-db.firebaseapp.com",
   projectId: "capstone-gentcod-db",
   storageBucket: "capstone-gentcod-db.appspot.com",
   messagingSenderId: "798989028275",
   appId: "1:798989028275:web:2ea8233da30b106af159c6"
};
 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Create instance of google authentication class
const googleProvider = new GoogleAuthProvider();
//Callback function to select account for authentication
googleProvider.setCustomParameters({
   prompt: 'select_account',
})

//Creating authentication
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//Creating database or storing database object to a variable
export const db = getFirestore();

//Create user document authentication
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
   if(!userAuth) return;

   //User document reference
   const userDocRef = doc(db, 'users', userAuth.uid);

   const userSnapShot = await getDoc(userDocRef);

   //If user data exists
   if(!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInfo,
         });


      } catch (err) {
         console.log('Error creating user', err.message)
      }
   }

   //If user data does not exist
   return userDocRef;
}

export  const createAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;

   return createUserWithEmailAndPassword(auth, email, password)
}

export  const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;

   return signInWithEmailAndPassword(auth, email, password)
}