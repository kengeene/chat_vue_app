<template>
    <div>
        <Header/>
        <ChatDisplay/>
        <MessageBox/>
    </div>
</template>

<script>
import ChatDisplay from './ChatDisplay.vue'
import MessageBox from './MessageBox.vue'
import Header from './Header.vue'

    export default {
        components: {
            ChatDisplay,
            MessageBox,
            Header
        },
    }
</script>

<style lang="scss" scoped>

</style>