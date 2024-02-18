import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
    state: () => ({
        copyrightTxt: '© vr landing page - by rxfr - all rights reserved'
    })
})