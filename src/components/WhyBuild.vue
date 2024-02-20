<template>
  <section class="why-build__section">
    <div class="container">
        <div class="row">
            <AllTitleBox :title="store.title"/>
            
            <p class="why-build-txt all-txt">{{ store.txt }}</p>
        </div>
    </div>
  </section>
</template>

<script>
import AllTitleBox from './AllTitleBox.vue'
import { whybuildStore } from "@/stores/whybuildStore.js";

export default {
    name: 'Why Build Section',
    components: {
        AllTitleBox
    },
    data() {
        return {
            store: whybuildStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.why-build__section {
    width: 100%;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 25px;
    }

    .why-build-txt {
        max-width: 645px;
        width: 100%;
    }
}

@media (max-width: 886px) {
    .row {
        flex-direction: column;
        text-align: center;
    }
}


</style>