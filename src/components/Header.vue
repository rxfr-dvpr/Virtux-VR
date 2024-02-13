<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <h1 class="header__descr-title" v-html="store.descr.title"></h1>
                <p class="header__descr-txt">{{ store.descr.txt }}</p>

                <button class="header__descr-btn all-btn">{{ store.descr.btnTxt }}</button>
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
            store: headerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding-top: 100px;

    &__descr {
        display: flex;
        flex-direction: column;
        row-gap: 25px;

        &-title {
            text-transform: capitalize;

            .purple-clr {
                color: var(--main-purple);
            }
        }

        &-txt {
            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

</style>