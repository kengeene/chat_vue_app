<template>
    <div class="display-area">
        <div v-if="messages.length === 0">
            No messages here
        </div>
        <div v-for="(message, index) in messages" v-else :key="index">
            {{ message }}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Display',
        props: {
            messages: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
.display-area{
    background-color: #ffffff;
    height: 85%;
    width: 100%;
    display: block;
    color: #000000;
}
</style>