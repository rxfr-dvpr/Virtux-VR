import { defineStore } from "pinia";

export const processStore = defineStore('Process Store', {
    state: () => ({
        title: 'how we build <span class="light-title">with virtux vr?</span>',
        txt: 'at VirtuX VR, our building philosophy is grounded in innovation, precision, and a relentless pursuit of excellence. Discover how we construct immersive worlds and redefine possibilities. From meticulous design to cutting-edge technology integration, our process is a testament to our commitment to crafting unparalleled virtual experiences. Explore the art and science behind how we build with VirtuX VR, and elevate your projects to new heights.',
        steps: [
            {
                name: '3d conception & design'
            },
            {
                name: 'interaction design'
            },
            {
                name: 'vR world user testing'
            },
            {
                name: 'virtuX vR deploy'
            }
        ],
        bgImg: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/ProcessSection%2Fbg-line.svg?alt=media&token=9b26ded7-c51e-4f01-b0f2-75f89d78a337'
    })
})