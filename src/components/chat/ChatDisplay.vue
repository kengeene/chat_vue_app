<template>
    <v-row>
    <div class="display-area">
        <div v-if="messages.length === 0">
            No messages here
        </div>
        <div v-for="(message, index) in messages" v-else :key="index" class="display-area__message-box">
            <span class="display-area__name">{{ message.displayName }}</span>
            <span class="display-area__profile-avi">{{ message.photoURL }}</span>
            <span class="display-area__message">{{ message.message }}</span>
            <span class="display-area__date">{{ message.dateAdded.seconds }}</span>
        </div>
    </div>
    </v-row>
</template>
<script>
import Database from '../../classes/db';

    export default {
        name: 'Display',
        data() {
            return {
                messages: []
            }
        },
        mounted() {
            this.getChats()
        },
        methods: {
            async getChats() {
                try{
                    const database = new Database('messages')
                    const messages = await database.get()
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
    padding: 10px 10px;
    margin: 10px 0 30% 0;

    &__date{
        display: block;
    }

    &__message-box{
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