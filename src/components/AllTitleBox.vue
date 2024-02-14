<template>
    <div class="all-title-box">
        <h2 class="all-title" v-html="title"></h2>
        <span class="right-icon"><i class="fal fa-long-arrow-right"></i></span>
    </div>
</template>

<script>

export default {
    name: 'All Title Box',
    props: {
        title: {
            type: String,
            default: 'default <span class="light-title">value</span>'
        }
    }
}

</script>

<style lang="scss" scoped>

.all {
    &-title-box {
        max-width: 420px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .right-icon {
            font-size: 70px;
            i {
                color: var(--main-pink);
            }
        }
    }

    &-title {
        line-height: 120%;
        display: flex;
        flex-direction: column;
    }
}

</style>