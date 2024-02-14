<template>
  <Header/>


  <main class="main">
    <HeaderWidget/>

    <Introduction/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'
import Introduction from '@/components/Introduction.vue'

export default {
  name: "Home Page",
  components: {
    Header,
    HeaderWidget,
    Introduction
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 100px;
}

</style>