<template>
    <div>
        <v-row class="header">
            <v-col cols="4">
                <img :src="userDetails.photoURL" class="profile-img"/>
            </v-col>
            <v-col cols="4">
               <h2>Firebase Chat App</h2>
            </v-col>
            <v-col cols="4">
                <a @click="logout()">Logout</a>
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
}
.profile-img{
    height: 50px;
    width: 50px;
}
</style>