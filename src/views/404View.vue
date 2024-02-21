<template>
  <section class="error__section">
    <div class="container">
        <div class="row">
            <h2 class="error-title">404</h2>
            <p class="error-msg">page not found</p>
            <router-link to="/" class="back-btn all-btn scnd"><i class="far fa-long-arrow-left fa-fw"></i> back to home page</router-link>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: '404 Page'
}

</script>

<style lang="scss" scoped>

.error__section {
    width: 100%;
    padding: 50px 0;
    min-height: 50vh;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 15px;
    }

    .error-title {
        font-size: calc(60px + 60 * (100vw / 1920));
    }

    .error-msg {
        font-size: calc(25px + 5 * (100vw / 1920));
        text-transform: capitalize;
        font-weight: 700;
    }

    .back-btn {
        display: flex;
        align-items: center;
        gap: 7px;
        background: #8176AF !important;
        margin-top: 30px;

        i {
            font-size: 18px;
        }
    }
}

@media (min-width: 1920px) {
    .error-title {
        font-size: 120px !important;
    }
}

</style>