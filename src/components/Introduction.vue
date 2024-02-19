<template>
  <section class="introduction__section">
    <div class="container">
        <div class="row">
            <AllTitleBox :title="store.title"/>

            <p class="introduction-txt all-txt">{{ store.txt }}</p>
        </div>
    </div>
  </section>
</template>

<script>
import { introductionStore } from "@/stores/introductionStore.js";
import AllTitleBox from './AllTitleBox.vue';

export default {
    name: 'Introduction',
    components: {
        AllTitleBox,
    },
    data() {
        return {
            store: introductionStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.introduction__section {
    width: 100%;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 25px;
    }

    .introduction {
        &-txt {
            max-width: 655px;
            width: 100%;
        }
    }
}

@media (max-width: 886px) {
    .row {
        flex-direction: column;
        text-align: center;
    }
}

</style>