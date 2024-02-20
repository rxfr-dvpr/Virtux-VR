<template>
  <section class="contact__section" id="join">
    <div class="container">
        <div class="row">
            <form action="https://formsubmit.co/freelanceredfox@gmail.com" method="POST" class="contact__form">
                <h2 class="contact__form-title all-title">{{ store.title }}</h2>
                <span class="contact__form-line"></span>
                <p class="contact__form-subtitle all-title">{{ store.subtitle }}</p>

                <div class="form__inputs">
                    <input :type="input.type" :class="`form__inputs-inp ${input.class}`" :placeholder="input.placeHolder"
                    v-for="(input, idx) in store.inputs" :key="idx" :name="input.name" v-model="input.value" required>

                    <textarea :name="store.msgInp.name" id="" :class="`form__inputs-inp ${store.msgInp.class}`" rows="10" 
                    v-model="store.msgInp.value" :placeholder="store.msgInp.placeHolder" required></textarea>

                    <input type="hidden" name="_captcha" value="false">
                </div>

                <button class="contact__form-btn all-btn scnd" type="submit">{{ store.btnText }}</button>
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import { contactStore } from "@/stores/contactStore.js";

export default {
    name: 'Contact Section',
    data() {
        return {
            store: contactStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;

    .contact__form {
        width: 100%;
        border-radius: 100px;
        overflow: hidden;
        background: rgb(64,58,95);
        background: radial-gradient(circle, rgba(64,58,95,1) 0%, rgba(33,30,46,1) 100%);
        padding: 90px 110px 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 35px;

        &-line {
            max-width: 415px;
            width: 100%;
            height: 2px;
            background: rgb(52,48,69);
            background: linear-gradient(90deg, rgba(52,48,69,1) 0%, rgba(192,183,232,1) 45%, rgba(129,118,175,1) 70%, rgba(52,48,69,1) 100%);
        }

        &-subtitle {
            font-weight: 400 !important;
            text-transform: capitalize;
            font-size: calc(20px + 20 * (100vw / 1920));
        }

        .form__inputs {
            max-width: 1055px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            column-gap: 10px;
            row-gap: 40px;

            &-inp {
                max-width: 520px;
                width: 100%;
                background: transparent;
                border: solid 1px #fff;
                outline: none;
                padding: 20px 25px;
                border-radius: 40px;

                &::placeholder {
                    text-transform: capitalize;
                    font-size: 14px;
                    color: rgba($color: #fff, $alpha: .7);
                    font-weight: 300;
                }

                &.long-inp {
                    max-width: 100%;
                }

                &.msg-inp {
                    padding-top: 30px;
                    resize: vertical;
                }
            }
        }

        &-btn {
            background: #8176AF !important;
            border-color: #8176AF;
        }
    }
}

@media (min-width: 1920px) {
    .contact__form-subtitle {
        font-size: 40px !important;
    }
}

@media (max-width: 1320px) {
    .contact__form {
        padding: 80px 15px !important;
    }
}

@media (max-width: 1150px) {
    .form__inputs {
        justify-content: center !important;

        &-inp {
            max-width: 450px !important;

            &.long-inp {
                max-width: 900px !important;
            }
        }
    }
}

@media (max-width: 992px) {
    .contact__form {
        padding: 70px 50px !important;
        border-radius: 70px !important;
    }

    .form__inputs {
        flex-direction: column;
        align-items: center;

        &-inp {
            max-width: 100% !important;
            border-radius: 25px !important;
        }
    }
}

@media (max-width: 768px) {
    .contact__form {
        padding: 50px 40px !important;
    }
}

@media (max-width: 586px) {
    .contact__form {
        padding: 50px 25px !important;
    }
}

</style>