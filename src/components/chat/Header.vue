<template>
    <div>
        <v-row class="header">
            <v-col class="header__heading">
               <h2>Firebase Chat App</h2>
            </v-col>
            <v-col cols="2">
                <img :src="userDetails.photoURL" class="profile-img"/>
                <div>
                <span class="display-name">{{ userDetails.displayName }}</span>
                <a @click="logout()" class="logout-btn">Logout</a>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

    export default {
        data() {
            return {
                userDetails: JSON.parse(localStorage.getItem('userDetails'))
            }
        },
        methods: {
            logout() {
                const auth = getAuth();
signOut(auth).then(() => {
    localStorage.removeItem('userDetails');
  this.$router.push('/auth/login')
}).catch((error) => {
  // An error happened.
  console.log('error', error);
});
            }
        },
    }
</script>

<style lang="scss" scoped>
.header{
    align-items: center;

    &__heading{
        text-align: left;
        color: #ffffff;
    }
}
.profile-img{
    height: 50px;
    width: 50px;
    border-radius: 50px;
}
.logout-btn{
    cursor: pointer;
}
.display-name{
    color: #ffffff;
    margin-right: 10px;
}
</style>