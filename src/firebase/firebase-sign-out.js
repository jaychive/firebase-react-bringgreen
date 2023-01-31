import { getAuth, signOut } from "firebase/auth";

function singOut(params) {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}



export default signOut;