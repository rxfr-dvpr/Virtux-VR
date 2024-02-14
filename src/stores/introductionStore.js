import { defineStore } from "pinia";

export const introductionStore = defineStore('Introduction Store', {
    state: () => ({
        title: 'introduction <span class="light-title">to virtux vr</span>',
        txt: 'Step into the extraordinary with VirtuX VR. A realm where innovation meets imagination, redefining how we perceive and interact with the digital frontier. Vivid experiences await as technology and creativity converge. VirtuX VR: Where boundaries fade, and possibilities unfold.  '
    })
})