<template>
  <div class="login-container">
    <h1>Login Page</h1>
    <form>
      <div>
        <label>Email</label>
        <input type="email" v-model="email">
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password">
      </div>
      <button @click.prevent="login">Login</button>
      <button @click.prevent="loginWithGoogle">Login with Google</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    },
    async loginWithGoogle() {
      try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth();
        const {user} = await signInWithPopup(auth, provider);
        const { displayName, email, photoURL, uid } = user;
        localStorage.setItem('userDetails', JSON.stringify({ displayName, email, photoURL, uid }));
        this.$router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.login-container{
    color: #ffffff
}
</style>
