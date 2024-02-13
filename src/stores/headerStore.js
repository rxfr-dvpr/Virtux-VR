import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        descr: {
            title: '<span class="purple-clr">dive</span> in to the depths of <span class="purple-clr">virtual reality</span>',
            txt: 'immerse in VirtuX VR - where reality transforms. Elevate your experience, redefine boundaries',
            btnTxt: 'build you world'
        },
        img: ''
    })
})