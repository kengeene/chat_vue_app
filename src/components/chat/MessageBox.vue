<template>
    <div class="footer">
        <v-form @submit.prevent>

            <v-row>
                <v-col cols="11">
                    <v-text-field
                     v-model="message"
                     label="Type Here"
                     variant="outlined"
                     :rules="rules"
      ></v-text-field>
                </v-col>
                <v-col>
                    <v-btn type="submit" block class="mt-2">Send</v-btn>
                </v-col>
            </v-row>
    </v-form>

    </div>
</template>

<script>
    export default {
data() {
    return {
        message: '',
        rules: [(v)=> !!v || 'This field is required']
    }
},
    }
</script>

<style lang="scss" scoped>
.footer{
    display: block;
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    left: 0;
}
</style>