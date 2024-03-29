import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        descr: {
            title: '<span class="purple-clr">dive</span> in to the depths of <span class="purple-clr">virtual reality</span>',
            txt: 'immerse in VirtuX VR - where reality transforms. Elevate your experience, redefine boundaries',
            btnTxt: 'build you world'
        },
        img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/Header%2Fheader-img.png?alt=media&token=284f7b4a-02ff-4fe2-b865-c0fec0480431'
    })
})