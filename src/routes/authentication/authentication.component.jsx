// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const response = await getRedirectResult(auth);
  //         if(response) {
  //             const userDocRef = await createUserDocumentFromAuth(response.user);
  //         }
  //     }

  //     fetchData();
  // }, []);

  return (
    <AuthenticationContainer>
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
