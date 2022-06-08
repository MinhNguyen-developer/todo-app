/** @format */

import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const provider = new FacebookAuthProvider();
const auth = getAuth();
export const signIn = signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
  });
