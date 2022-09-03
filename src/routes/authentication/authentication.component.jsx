import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import {AuthenticationContainer} from './authentication.styles';

const Authentication = () => {

   return (
      <AuthenticationContainer>
         <SignInForm/>
         <SignUpForm/>
         {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      </AuthenticationContainer>
   )
}

export default Authentication;