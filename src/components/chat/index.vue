<template>
  <div>
    <AppHeader />
    <ChatDisplay />
    <MessageBox />
  </div>
</template>

<script>
  import ChatDisplay from './ChatDisplay.vue';
  import MessageBox from './MessageBox.vue';
  import AppHeader from './Header.vue';

  export default {
    components: {
      ChatDisplay,
      MessageBox,
      AppHeader,
    },
  };
</script>

<style lang="scss" scoped>
</style>