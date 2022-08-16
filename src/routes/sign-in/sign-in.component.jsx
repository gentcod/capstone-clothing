import { signInWithGooglePopUp, createUserDocumentAuth } from '../../utilities/firebase/firebase.utilities'

const SignIn = () => {
   const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopUp();
      const userDcoRef = await createUserDocumentAuth(user);
   };

   return (
      <div>
         <h1>Sign IN page</h1>
         <button onClick={logGoogleUser}>Sign In with Google</button>
      </div>
   )
}

export default SignIn;