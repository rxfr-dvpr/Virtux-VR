import { defineStore } from "pinia";

export const aboutStore = defineStore('About Store', {
    state: () => ({
        title: 'about <span class="light-title">virtux vr</span>',
        txt: 'at VirtuX, we are pioneers in crafting immersive realities that transcend the ordinary. Our passion lies in pushing the boundaries of virtual experiences, providing you with cutting-edge VR solutions. With a commitment to innovation, quality, and unparalleled user satisfaction, we invite you to join us on a journey where the digital and real seamlessly converge. Explore the future of immersive technology with VirtuX - where every encounter is an adventure. ',
        img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/AboutSection%2Fabout-img.png?alt=media&token=b2fdeca5-70d2-41c5-8722-837874fc858f',
        btnTxt: 'let’s get in touch'
    })
})