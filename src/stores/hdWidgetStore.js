import { defineStore } from "pinia";

export const hdWidgetStore = defineStore('Header Widget Store', {
    state: () => ({
        items: [
            {
                name: 'pay us a visit',
                icon: '<i class="fas fa-map-marker-alt"></i>',
                link: {
                    txt: 'Amir Temur St, Tashkent, TA 10091, Uzbekistan',
                    url: 'https://maps.app.goo.gl/rTRMQbk7yNagKT7XA'
                }
            },
            {
                name: 'give us a call',
                icon: '<i class="fas fa-phone-plus"></i>',
                link: {
                    txt: '+998(99) 817-30-66',
                    url: 'tel:+998998173066'
                }
            },
            {
                name: 'send us a message',
                icon: '<i class="fas fa-envelope"></i>',
                link: {
                    txt: 'freelanceredfox@gmail.com',
                    url: 'mailto:freelanceredfox@gmail.com'
                }
            },
        ]
    })
})