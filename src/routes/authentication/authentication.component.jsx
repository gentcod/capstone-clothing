import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.style.scss';

const Authentication = () => {

   return (
      <div className='sign-in__forms-container'>
         <SignInForm/>
         <SignUpForm/>
         {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      </div>
   )
}

export default Authentication;