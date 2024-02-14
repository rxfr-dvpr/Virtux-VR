<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <h1 class="header__descr-title all-title" v-html="store.descr.title"></h1>
                <p class="header__descr-txt">{{ store.descr.txt }}</p>

                <button class="header__descr-btn all-btn scnd">{{ store.descr.btnTxt }}</button>
            </div>

            <div class="header__img-box">
                <img :src="store.img" alt="" class="header-img">
            </div>
        </div>
    </div>
  </header>
</template>

<script>
import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore(),
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding-top: 100px;

    .row {
        justify-content: space-between;
        gap: 40px;
    }

    &__descr {
        max-width: 455px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 35px;

        &-title {
            text-transform: capitalize !important;

            .purple-clr {
                color: var(--main-purple);
            }
        }

        &-txt {
            max-width: 355px;
            width: 100%;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    &__img-box {
        max-width: 490px;
        width: 100%;
        border-radius: 100px 100px 100px 250px;
        overflow: hidden;
        box-shadow: 0px 0px 15px rgba($color: #000000, $alpha: .1);

        .header-img {
            width: 100%;
        }
    }
}

</style>