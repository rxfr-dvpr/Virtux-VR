<template>
  <footer class="footer">
    <div class="container">
        <div class="row">
            <span class="footer-line"></span>

            <p class="footer__copyright-txt all-txt">{{ `${new Date().getFullYear()} ${store.copyrightTxt}` }}</p>
        </div>
    </div>
  </footer>
</template>

<script>
import { footerStore } from "@/stores/footerStore.js";

export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 120px 0 60px;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 50px;
    }

    .footer-line {
        width: 100%;
        height: 1px;
        background: rgb(52,48,69);
        background: linear-gradient(90deg, rgba(52,48,69,1) 0%, rgba(192,183,232,1) 45%, rgba(129,118,175,1) 70%, rgba(52,48,69,1) 100%);
    }

    .footer__copyright-txt {
        font-weight: 500;
        text-transform: uppercase;
    }
}

</style>