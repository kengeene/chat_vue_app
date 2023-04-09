<template>
  <div>
    <v-row class="header">
      <v-col class="header__heading" sm="6" xs="6" cols="auto">
        <h2>Firebase Chat App</h2>
      </v-col>
      <v-col sm="6" xs="6" class="header__image-display">
        <img :src="userDetails.photoURL" class="header__profile-img" />
        <div>
          <span class="header__display-name">{{ formattedName }}</span>
          <a class="header__logout-btn" @click="logout()">Logout</a>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { getAuth, signOut } from 'firebase/auth';

  export default {
    data() {
      return {
        userDetails: JSON.parse(localStorage.getItem('userDetails')),
      };
    },
    computed: {
      formattedName() {
        const names = this.userDetails.displayName.split(' ');
        return `${names[0]} ${names[1].charAt(0)}.`;
      },
    },
    methods: {
      logout() {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            localStorage.removeItem('userDetails');
            this.$router.push('/auth/login');
          })
          .catch((error) => {
            // An error happened.
            console.log('error', error);
          });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    align-items: center;

    &__heading {
      text-align: left;
      color: #ffffff;
    }

    &__image-display {
      text-align: right;
    }

    &__profile-img {
      height: 50px;
      width: 50px;
      border-radius: 50px;
    }

    &__logout-btn {
      cursor: pointer;
    }
    &__display-name {
      color: #ffffff;
      margin-right: 10px;
    }
  }
  /* Mobile Devices */
  @media (max-width: 480px) {
    .header {
      &__display-name {
        display: block;
        margin-right: 0;
      }
    }

    h2 {
      font-size: 1.2em;
    }
  }
</style>