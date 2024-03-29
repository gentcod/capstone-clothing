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

const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addDocumentAndCollection = async (collectionKey, objectsToAdd) => {
   const collectionRef = collection(db, collectionKey);
   const batch = writeBatch(db);

   objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase());

      batch.set(docRef, object);
   });

   await batch.commit();
   console.log('done');
}

export const getDocumentAndCollection = async () => {
   const collectionRef = collection(db, 'categories');

   const collectionQuery = query(collectionRef);
   const querySnapshot = await getDocs(collectionQuery);

   return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
   if(!userAuth) return;

   const userDocRef = doc(db, 'users', userAuth.uid);

   const userSnapShot = await getDoc(userDocRef);

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
   return userSnapShot;
}

export  const createAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;

   return createUserWithEmailAndPassword(auth, email, password)
}

export  const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;

   return signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsuscribe = onAuthStateChanged(
         auth, 
         (userAuth) => {
            unsuscribe();
            resolve(userAuth);
         },
         reject
      );
   })
}