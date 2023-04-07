<template>
    <v-row>
    <div class="display-area" id="messages" v-loading="loading">
        <div v-if="messages.length === 0">
            No messages here
        </div>
        <v-row v-for="(message, index) in messages" v-else :key="index" class="display-area__message-container" :class="isMe(message.uid) ?'display-area__message-container--right': ''">
        <v-card class="display-area__message-card">
            <v-col>
            <v-row>
            <v-col cols="3">
                <img class="display-area__profile-avi" :src="message.photoURL"/>
            </v-col>
                <v-col><span class="display-area__name">{{ message.displayName }}</span></v-col>
                <v-col><span class="display-area__date">{{ convertDate(message.dateAdded.seconds) }}</span></v-col>
            </v-row>
            <v-row>
            <span class="display-area__message">{{ message.message }}</span>
            </v-row>
            </v-col>
        </v-card>
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
                database: new Database('messages'),
                loading: false
            }
        },
        watch: {
            database: {
                handler: function(value){
                this.messages = value.listenData;
                // scroll to bottom for new texts
                this.scrollToBottom();
                },
                deep: true
            }
        },
        mounted() {
            this.getChats()
            this.scrollToBottom();
        },
        methods: {
            scrollToBottom(){
                const objDiv = document.getElementById("messages");
                objDiv.scrollTop = objDiv.scrollHeight;
            },
            async getChats() {
                this.loading = true;
                try{
                    await this.database.listen()
                    this.messages = messages
                    this.loading = false;
                }catch(e){
                    this.loading = false;
                    console.log('e', e)
                }
            },
            convertDate(timestamp){
                return new Date(timestamp);
            },
            isMe(messageUid){
                const {uid} = JSON.parse(localStorage.getItem('userDetails'))
                if(uid === messageUid){
                    return true
                }
                return false
            }
        },
    }
</script>

<style lang="scss" scoped>
$small-font: 10px;
.display-area{
    background-color: #ffffff;
    min-height: 100%;
    width: 100%;
    display: block;
    color: #000000;
    margin: 10px 0 7% 0;

    &__date{
        display: block;
        font-size: $small-font;
    }

    &__message-container{
        padding: 5px;
        margin: 5px;
        border-radius: 10px;

        &--right{
            justify-content: right;
        }
    }

    &__name{
        display: block;
        font-size: $small-font;
    }

    &__message-card{
        padding:10px;
        border-radius: 25px;
    }

    &__profile-avi{
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
}
</style>