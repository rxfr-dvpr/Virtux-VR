import { defineStore } from "pinia";

export const cardsStore = defineStore('Cards Store', {
    state: () => ({
        cards: [
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/Cards%2Fcard-img-1.png?alt=media&token=589015fe-3467-46b4-8ce8-828842a49e6a',
                name: 'simulation',
                txt: "Immerse in lifelike experiences with VirtuX VR's Simulation cards. Explore new dimensions where reality meets innovation.",
                btnTxt: 'try it now'
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/Cards%2Fcard-img-2.png?alt=media&token=fc32b48d-0236-4958-bc1b-905f047ce15f',
                name: 'education',
                txt: "Transform learning with VirtuX VR's Education cards. Unleash immersive educational adventures and make knowledge come alive.",
                btnTxt: 'try it now'
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/Cards%2Fcard-img-3.png?alt=media&token=3bfef5a6-6efd-4458-925a-ebbbc6cffcb8',
                name: 'self-care',
                txt: "Rejuvenate your mind and body with VirtuX VR's Self-Care cards. Dive into virtual realms designed for relaxation and well-being.",
                btnTxt: 'try it now'
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/virtux-vr.appspot.com/o/Cards%2Fcard-img-4.png?alt=media&token=028d7ff0-033c-48e5-9656-297a0b4e9ad3',
                name: 'outdoor',
                txt: "Embark on thrilling journeys with VirtuX VR's Outdoor cards. Bring the excitement of the great outdoors into the comfort of your own space.",
                btnTxt: 'try it now'
            },
        ]
    })
})