<template>
  <section class="process__section" id="how">
    <div class="container">
        <div class="row">
            <AllTitleBox :title="store.title"/>

            <p class="process-txt all-txt">{{ store.txt }}</p>
        </div>
    </div>
  </section>
</template>

<script>
import AllTitleBox from './AllTitleBox.vue'
import { processStore } from "@/stores/processStore.js";

export default {
    name: 'Process Section',
    components: {
        AllTitleBox
    },
    data() {
        return {
            store: processStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.process__section {
    width: 100%;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 25px;
    }

    .process-txt {
        max-width: 635px;
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