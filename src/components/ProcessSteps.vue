<template>
  <div class="process__steps">
    <div class="process__steps-item" v-for="(step, idx) in store.steps" :key="idx">
        <span class="step-num">{{ `0${idx + 1}` }}</span>
        <p class="step-name">{{ step.name }}</p>
    </div>

    <img :src="store.bgImg" alt="" class="steps-bg">
  </div>
</template>

<script>
import { processStore } from "@/stores/processStore.js";

export default {
    name: 'Process Steps',
    data() {
        return {
            store: processStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.process__steps {
    max-width: 1305px;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    position: relative;
    overflow-x: hidden;
    
    &-item {
        max-width: 160px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        align-items: center;
        text-align: center;

        .step-num {
            background: rgb(192,183,232);
            background: linear-gradient(90deg, rgba(192,183,232,1) 0%, rgba(129,118,175,1) 100%);
            border-radius: 50%;
            font-size: calc(44px + 20 * (100vw / 1920));
            width: 120px;
            height: 120px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--main-black);
            font-weight: 700;
            padding-top: 10px;
            box-shadow: 0px 0px 0px 10px rgba($color: #0D0D0D, $alpha: .3);
        }

        .step-name {
            font-size: calc(20px + 4 * (100vw / 1920));
            text-transform: capitalize;
            font-weight: 600;
        }
    }

    .steps-bg {
        width: 107%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
}

@media (min-width: 1920px) {
    .step-num {
        font-size: 64px !important;
    }

    .step-name {
        font-size: 24px !important;
    }
}

@media (max-width: 768px) {
    .process__steps {
        justify-content: center;
        gap: 50px;
    }

    .steps-bg {
        display: none;
    }
}

</style>