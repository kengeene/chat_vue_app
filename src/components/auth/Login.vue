<template>
  <div class="login-container">
    <h1>Login Page</h1>
    <form>
      <button @click.prevent="authObj.googleLogin($router)">Login with Google</button>
    </form>
  </div>
</template>

<script>
import Auth from '../../classes/auth.js';

export default {
  data() {
    return {
      authObj: new Auth({router: this.$router})
    }
  },
}
</script>
<style lang="scss" scoped>
.login-container{
    color: #ffffff
}
</style>
