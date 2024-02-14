<template>
  <Header/>


  <main class="main">
    <HeaderWidget/>

    <Introduction/>

    <About/>
  </main>
  
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'
import Introduction from '@/components/Introduction.vue'
import About from '@/components/About.vue'

export default {
  name: "Home Page",
  components: {
    Header,
    HeaderWidget,
    Introduction,
    About
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