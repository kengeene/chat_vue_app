<template>
  <div class="footer">
    <v-form @submit.prevent>
      <v-row>
        <v-col xs="8" sm="10" md="11">
          <v-text-field
            v-model="message"
            label="Type Here"
            variant="outlined"
            :rules="rules"
          />
        </v-col>
        <v-col cols="auto">
          <v-btn type="submit" block class="mt-2" @click="postMessage()"
            >Send</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
  import Database from '../../classes/db';
  export default {
    data() {
      return {
        message: '',
        rules: [(v) => !!v || 'This field is required'],
        userDetails: JSON.parse(localStorage.getItem('userDetails')),
      };
    },
    methods: {
      async postMessage() {
        const messagesDb = new Database('messages');
        try {
          const data = {
            message: this.message,
            ...this.userDetails,
            dateAdded: new Date(),
          };
          await messagesDb.add({ data });
          this.message = '';
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .footer {
    display: block;
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    left: 0;
    background-color: slategrey;
    padding-top: 10px;
    color: #ffffff;
  }
</style>