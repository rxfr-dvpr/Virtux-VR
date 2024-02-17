<template>
  <section class="tech__section" id="tech">
    <div class="container">
        <div class="row">
            <div class="brands__list">
                <a :href="brand.url" class="brands__list-item"  target="_blank"
                 v-for="(brand, idx) in store.brands" :key="idx">
                    <img :src="brand.img" alt="" class="brand-img" :title="brand.name">
                </a>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { techStore } from "@/stores/techStore.js";

export default {
    name: 'Tech Section',
    data() {
        return {
            store: techStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.tech__section {
    width: 100%;

    .row {
        flex-direction: column;
    }

    .brands__list {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;

        &-item {
            max-width: 150px;
            width: 100%;
            opacity: 35%;
            transition: .3s;

            .brand-img {
                width: 100%;
            }

            &:hover {
                opacity: 1;
            }
        }
    }
}

</style>