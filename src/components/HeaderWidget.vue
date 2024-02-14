<template>
  <section class="header__widget-section">
    <div class="container">
        <div class="row">
            <div class="header__widget">
                <div class="header__widget-item" v-for="(item, idx) in store.items" :key="idx">
                    <span class="item-icon" v-html="item.icon"></span>

                    <div class="item-descr">
                        <p class="item-descr-name">{{ item.name }}</p>
                        <a :href="item.link.url" target="_blank" class="item-descr-link">{{ item.link.txt }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { hdWidgetStore } from "@/stores/hdWidgetStore";

export default {
    name: 'Header Widget',
    data() {
        return {
            store: hdWidgetStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header__widget-section {
    width: 100%;
    margin-top: 100px;

    .header__widget {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 40px;
        background: rgb(58,52,86);
        background: radial-gradient(circle, rgba(58,52,86,1) 0%, rgba(33,30,46,1) 100%);
        border-radius: 70px;
        column-gap: 15px;
        row-gap: 25px;
        flex-wrap: wrap;

        &-item {
            display: flex;
            align-items: center;
            gap: 15px;

            .item-descr {
                display: flex;
                flex-direction: column;
                row-gap: 5px;

                &-name {
                    font-size: 24px;
                    text-transform: capitalize;
                    font-weight: 700;
                }

                &-link {
                    font-size: 14px;
                    font-weight: 300;
                }
            }
        }
    }
}

</style>