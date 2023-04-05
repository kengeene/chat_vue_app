<template>
    <div>
        <ChatDisplay/>
        <MessageBox/>
    </div>
</template>

<script>
import ChatDisplay from './ChatDisplay.vue'
import MessageBox from './MessageBox.vue'
    export default {
        components: {
            ChatDisplay,
            MessageBox
        },
    }
</script>

<style lang="scss" scoped>

</style>