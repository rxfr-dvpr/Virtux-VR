<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img src="@/assets/images/nav-logo.png" alt="" class="nav-logo-img">
                <span class="brand-name">virtux</span>
            </router-link>

            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in store.links" :key="idx">
                    <a :href="link.url" class="nav__list-link">{{ link.name }}</a>
                </li>
            </ul>

            <div class="nav__buttons">
                <a :href="btn.url" :class="`nav__buttons-item all-btn ${btn.name}`" v-for="(btn, id) in store.buttons" :key="id">
                    {{ btn.txt }}
                </a>
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
    name: 'Navigation',
    data() {
        return {
            store: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    padding: 10px 0;
    z-index: 2024;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    &-logo {
        max-width: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 3px;
        user-select: none;

        .brand-name {
            font-size: 22px;
            text-transform: uppercase;
            color: #C0B7E8;
            font-weight: 700;
        }

        &-img {
            max-width: 60px;
            width: 100%;
        }
    }

    &__list {
        max-width: 390px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        &-link {
            font-size: 12px;
            font-weight: 600;
            transition: .3s;
            text-transform: uppercase;

            &:hover {
                color: var(--main-pink);
            }
        }
    }

    &__buttons {
        max-width: max-content;
        width: 100%;
        display: flex;
        column-gap: 35px;

        &-item.join-btn {
            color: var(--main-dark);
            border-color: transparent;
            background: #8176AF;
        }

        &-item.contact-btn {
            &:hover {
                border-color: transparent;
            }
        }
    }
}

</style>