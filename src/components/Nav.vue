<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <router-link to="/" class="nav-logo">
                <img src="@/assets/images/nav-logo.png" alt="" class="nav-logo-img">
                <span class="brand-name">virtux</span>
            </router-link>

            <div class="nav__collapse" :class="{'opened': navOpened && scrollYVal > 120}" @click="this.navOpened = false">
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
            
            <button class="nav-mb-btn" v-show="windowSize <= 992" @click="navOpened = !navOpened" :class="{'active': navOpened}">
                <span class="nav-btn-line top"></span>
                <span class="nav-btn-line middle"></span>
                <span class="nav-btn-line bottom"></span>
            </button>
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
            store: navStore(),
            windowSize: window.innerWidth,
            navOpened: false,
            scrollYVal: window.scrollY
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowSize = window.innerWidth
        })

        window.addEventListener('scroll', () => {
          this.scrollYVal = window.scrollY
        })
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
        gap: 20px;
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
        z-index: 99999;

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

    &__collapse {
        max-width: 900px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 25px;
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

            &:hover, &:active {
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

@media (max-width: 992px) {
    .nav__collapse {
        position: fixed;
        top: 0;
        left: 0;
        max-width: max-content;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background: #211E2E;
        justify-content: center;
        padding: 20px;
        transition: .4s;
        transform: translateX(-100%);

        .nav__list, .nav__buttons {
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;
        }

        &.opened {
            transform: translateX(0%);
        }
    }

    .nav-mb-btn {
        background: transparent;
        width: 26px;
        border: 0;
        outline: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        row-gap: 7px;

        .nav-btn-line {
            width: 100%;
            height: 2px;
            display: block;
            background: var(--main-pink);
            transition: .4s;

            &.middle {
                width: 70%;
                transition: .3s !important;
            }
        }

        &.active {
            .nav-btn-line {
                &.top {
                    transform: translateY(8px) rotate(-45deg);
                }

                &.middle {
                    width: 0;
                }

                &.bottom {
                    transform: translateY(-10px) rotate(45deg);
                }
            }
        }
    }
}

@media (max-width: 668px) {
    .nav-logo {
        max-width: 70px !important;
        
        .brand-name {
            font-size: 18px;
        }
    }
}

</style>