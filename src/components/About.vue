<template>
  <section class="about__section" id="about">
    <div class="container">
        <div class="row">

            <div class="about__img-box">
                <img :src="store.img" alt="" class="about-img">
            </div>

            <div class="about__descr">
                <h2 class="about__descr-title all-title" v-html="store.title"></h2>

                <p class="about__descr-txt all-txt">{{ store.txt }}</p>

                <button class="about__descr-btn all-btn scnd">{{ store.btnTxt }}</button>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { aboutStore } from "@/stores/aboutStore.js";

export default {
    name: 'About Section',
    data() {
        return {
            store: aboutStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;

    .row {
        justify-content: space-between;
        align-items: center;
        column-gap: 35px;
        row-gap: 50px;
    }

    .about__img-box {
        max-width: 525px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: 0px 0px 15px rgba($color: #000000, $alpha: .1);
        border-radius: 220px 90px;

        .about-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .about__descr {
        max-width: 630px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 35px;

        &-title {
            display: flex;
            flex-direction: column;
        }
    }
}

</style>