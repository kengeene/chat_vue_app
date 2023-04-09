<template>
  <div class="login-container">
    <h1 class="login-container__heading">Chat App</h1>
    <form class="login-container__form">
      <v-btn @click.prevent="authObj.googleLogin($router)" class="login-container__btn">Login with Google</v-btn>
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
  color: #ffffff;
  display: block;

    &__btn{
      margin: 30px;
    }

    &__heading{
      margin: 30px;
    }
}

@media (max-width: 480px) {
  .login-container{
  height: 100%;
  margin-top: 50%;
  }
}
</style>
