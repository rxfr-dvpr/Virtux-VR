import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'about',
                url: '#about'
            },
            {
                name: 'services',
                url: '#services'
            },
            {
                name: 'technologies',
                url: '#tech'
            },
            {
                name: 'how to',
                url: '#how'
            }
        ],
        buttons: [
            {
                txt: 'contact us',
                url: '#contact',
                name: 'contact-btn'
            },
            {
                txt: 'join virtux',
                url: '#join',
                name: 'join-btn'
            }
        ]
    })
})