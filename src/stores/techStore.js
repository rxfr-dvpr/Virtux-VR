import { defineStore } from "pinia";

export const techStore = defineStore('Tech Store', {
    state: () => ({
        brands: [
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/TechSection%2Funreal-engine.png?alt=media&token=5864dc9e-dd73-4b4e-a8ec-52e4621bff13',
                name: 'unreal engine',
                url: 'https://www.unrealengine.com/'
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/TechSection%2Funity.png?alt=media&token=3d9e2680-4b97-4a31-92b3-28c6ad7a1e15',
                name: 'unity',
                url: 'https://unity.com/'
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/TechSection%2Foculus.png?alt=media&token=9eb9cc40-c917-4bf1-ad93-e23e32d404e6',
                name: 'oculus',
                url: 'https://www.oculus.com/'
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/TechSection%2Fvive.png?alt=media&token=e06b7a96-4045-49d2-8809-f598d1b66a8c',
                name: 'vive',
                url: 'https://www.vive.com/'
            }
        ]
    })
})