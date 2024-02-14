<template>
  <Header/>

  <HeaderWidget/>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'

export default {
  name: "Home Page",
  components: {
    Header,
    HeaderWidget
  }
}

</script>

<style lang="scss" scoped>
</style>