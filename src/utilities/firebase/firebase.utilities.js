import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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
console.log(firebaseApp)

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

//Function to add collection and documents to firebase
export const addDocumentAndCollection = async (collectionKey, objectsToAdd) => {
   //Variable to store the collection created in database and the collection key (name of the collection)
   const collectionRef = collection(db, collectionKey);

   //Variable to store batch of document in collection
   const batch = writeBatch(db);

   //Iterate through object data, create document reference to specific collection title
   objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase());

      batch.set(docRef, object);
   });

   await batch.commit();
   console.log('done');
}

//Fetch document data from firestore
export const getDocumentAndCollection = async () => {
   const collectionRef = collection(db, 'categories');

   //Generate query from collection reference
   const collectionQuery = query(collectionRef);

   const querySnapshot = await getDocs(collectionQuery);

   //Convert array to return object
   const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;

      return acc;
   }, {})

   return categoriesMap;
}

//Create user document authentication
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
   //Guard clause
   if(!userAuth) return;

   //Create user document reference form database
   const userDocRef = doc(db, 'users', userAuth.uid);

   //To check if user document exists
   const userSnapShot = await getDoc(userDocRef);

   //If user data exists
   if(!userSnapShot.exists()) {

      //Destructure keys from userAuth object
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         //Set document and add key values to user document object in database
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

//Function that creates user authothentication with email and password
export  const createAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;

   return createUserWithEmailAndPassword(auth, email, password)
}

//Function that creates user authothentication when a sign in takes place
export  const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;

   return signInWithEmailAndPassword(auth, email, password)
}

//Async function to sign out user
export const signOutUser = async () => await signOut(auth);

//Function to monitor the change of state of authothentication
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)