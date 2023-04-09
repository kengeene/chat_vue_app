import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default class Auth{
    constructor({router}){
        this.router = router;
    }

    async googleLogin(){
      try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth();
        const {user} = await signInWithPopup(auth, provider);
        const { displayName, email, photoURL, uid } = user;
        localStorage.setItem('userDetails', JSON.stringify({ displayName, email, photoURL, uid }));
        this.router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    }
};