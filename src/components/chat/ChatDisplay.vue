<template>
    <v-row>
    <div class="display-area" id="messages">
        <div v-if="messages.length === 0">
            No messages here
        </div>
        <v-row v-for="(message, index) in messages" v-else :key="index" class="display-area__message-container">
        <div>
            <span class="display-area__name">{{ message.displayName }}</span>
            <span class="display-area__profile-avi">{{ message.photoURL }}</span>
            <span class="display-area__message">{{ message.message }}</span>
            <span class="display-area__date">{{ message.dateAdded.seconds }}</span>
        </div>
        </v-row>
    </div>
    </v-row>
</template>
<script>
import Database from '../../classes/db';

    export default {
        name: 'Display',
        data() {
            return {
                messages: [],
                database: new Database('messages')
            }
        },
        watch: {
            database: {
                handler: function(value){
                this.messages = value.listenData;
                // scroll to bottom for new texts
                // const objDiv = document.getElementById("messages");
                // objDiv.scrollTop = objDiv.scrollHeight;
                },
                deep: true
            }
        },
        mounted() {
            this.getChats()
        },
        methods: {
            async getChats() {
                try{
                    await this.database.listen()
                    this.messages = messages
                }catch(e){
                    console.log('e', e)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.display-area{
    background-color: #ffffff;
    min-height: 100%;
    width: 100%;
    display: block;
    color: #000000;
    margin: 10px 0 7% 0;

    &__date{
        display: block;
    }

    &__message-container{
        border: 1px solid #000000;
        padding: 5px;
        margin: 5px;
        width: 10%;
        border-radius: 10px;
    }

    &__name{
        display: block;
    }
}
</style>