<template>
  <Header/>


  <main class="main">
    <HeaderWidget/>

    <Introduction/>

    <About/>

    <WhyBuild/>
    
    <Cards/>

    <Process/>
  </main>
  
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'
import Introduction from '@/components/Introduction.vue'
import About from '@/components/About.vue'
import WhyBuild from '@/components/WhyBuild.vue'
import Cards from '@/components/Cards.vue'
import Process from '@/components/Process.vue'

export default {
  name: "Home Page",
  components: {
    Header,
    HeaderWidget,
    Introduction,
    About,
    WhyBuild,
    Cards,
    Process
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