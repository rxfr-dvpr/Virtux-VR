<template>
  <div class="virtux__cards" id="services">
    <div class="virtux__cards-item" v-for="(card, idx) in store.cards" :key="idx">

        <div class="card-img-box">
            <img :src="card.img" alt="" class="card-img">
        </div>

        <p class="card-name">{{ card.name }}</p>

        <p class="card-txt">{{ card.txt }}</p>

        <button class="card-btn all-btn">{{ card.btnTxt }}</button>
    </div>
  </div>
</template>

<script>
import { cardsStore } from "@/stores/cardsStore.js";

export default {
    name: 'Virtux Cards',
    data() {
        return {
            store: cardsStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.virtux__cards {
    max-width: 1305px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 10px;
    row-gap: 20px;
    padding: 0 15px;
    margin: 0 auto;

    &-item {
        max-width: 310px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 25px 25px 40px;
        background: rgb(58,52,86);
        background: radial-gradient(circle, rgba(58,52,86,1) 0%, rgba(33,30,46,1) 100%);
        border-radius: 40px;
        row-gap: 25px;

        .card-img-box {
            max-width: 190px;
            width: 100%;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0px 0px 0px 10px rgba($color: #0E0E0E, $alpha: .3);

            .card-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
        .card-name {
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
            border-bottom: 1px solid #C0B7E8;
            padding-bottom: 15px;
        }

        .card-txt {
            font-size: 12px;
            font-weight: 300;
        }

        .card-btn {
            color: var(--main-dark);
            border-color: transparent;
            background: #8176AF;
        }
    }
}

</style>