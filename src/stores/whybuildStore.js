import { defineStore } from "pinia";

export const whybuildStore = defineStore('Why Build', {
    state: () => ({
        title: 'why build <span class="light-title">with virtux</span>',
        txt: 'choose to build with VirtuX VR because we redefine possibilities. Our commitment to innovation, unparalleled quality, and a seamless blend of virtual and real experiences sets us apart. Elevate your projects with cutting-edge technology, immerse your audience in a new dimension, and let VirtuX VR be the foundation of your visionary creations. Build with us and unlock a realm of limitless possibilities. '
    })
})