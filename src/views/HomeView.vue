<template>
  <Header/>

  <main class="main">
    <HeaderWidget/>

    <Introduction/>

    <About/>

    <WhyBuild/>
    
    <Cards/>

    <Tech/>

    <Process/>

    <ProcessSteps/>

    <Contact/>
  </main>

  <Transition name="fade">
    <button class="scroll-btn all-btn scnd" @click="scrollToTop" v-show="scrollYVal > 100"><i class="fas fa-chevron-up"></i></button>
  </Transition>

</template>

<script>
import Header from '@/components/Header.vue'
import HeaderWidget from '@/components/HeaderWidget.vue'
import Introduction from '@/components/Introduction.vue'
import About from '@/components/About.vue'
import WhyBuild from '@/components/WhyBuild.vue'
import Cards from '@/components/Cards.vue'
import Process from '@/components/Process.vue'
import ProcessSteps from '@/components/ProcessSteps.vue'
import Tech from '@/components/Tech.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: "Home Page",
  components: {
    Header,
    HeaderWidget,
    Introduction,
    About,
    WhyBuild,
    Cards,
    Process,
    ProcessSteps,
    Tech,
    Contact,
  },
  data() {
    return {
      scrollYVal: window.scrollY
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.$router.push('/')
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollYVal = window.scrollY
    })
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

.scroll-btn {
  max-width: 40px;
  width: 100%; 
  height: 40px !important;
  position: fixed;
  bottom: 10%;
  right: 3%;
  z-index: 9874;
  padding: 0;
  font-size: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: .4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 992px) {
  .main {
    row-gap: 70px;
  }
}

</style>