import { defineStore } from "pinia";

export const contactStore = defineStore('Contact Store', {
    state: () => ({
        title: 'join hydra',
        subtitle: 'let’s build your vr experience',
        inputs: [
            {
                name: 'name',
                value: '',
                placeHolder: 'first name',
                type: 'text',
                class: 'fName-inp'
            },
            {
                name: 'name',
                value: '',
                placeHolder: 'last name',
                type: 'text',
                class: 'lName-inp'
            },
            {
                name: 'email',
                value: '',
                placeHolder: 'email',
                type: 'email',
                class: 'email-inp'
            },
            {
                name: 'phone',
                value: '',
                placeHolder: '+998(__)000-00-00',
                type: 'number',
                class: 'number-inp'
            },
            {
                name: 'subject',
                value: '',
                placeHolder: 'Subject',
                type: 'text',
                class: 'subject-inp long-inp'
            }
        ],
        msgInp: {
            name: 'msg',
            value: '',
            placeHolder: 'tell us something...',
            type: 'text',
            class: 'msg-inp long-inp'
        },
        btnText: 'send to virtux'
    })
})