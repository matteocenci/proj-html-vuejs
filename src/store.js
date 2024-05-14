import { reactive } from "vue";

export const store = reactive ({

    contacts: {
            telephoneNumber: '+1 (305) 1234-5678',
            mainMailAdress: 'hello@example.com',
            secondaryMailAdress: ' mail@example.com',
            mainAdress: 'Main Avenue, 987',
            secondaryAdress:  'Main Avenue, 123'
    },

    results: {
        certifications: 128,
        employees: 230,
        customers: 517,
        countriesServed: 94
    },

    main_services: [
        {
            title: 'Technology',
            description: 'We are continually focused on developing technology solutions adapted to our client need',
            icon: 'fa-solid fa-dolly'
        },
        {
            title: 'Reefer Cargo',
            description: 'Regular and frequent monitoring from the receipt of the loaded container to final destination',
            icon: 'fa-solid fa-temperature-low'
        },
        {
            title: 'Dry Cargo',
            description: 'We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care',
            icon: 'fa-solid fa-cubes'
        }
    ],

    trusted_feedback: [
        {
            title:'WooCommerce',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.'
        },
        {
            title:'WordPress',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.'
        },
        {
            title:'Pingdom',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.'
        },
        {
            title:'JQuery',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.'
        },
        {
            title:'Less',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.'
        }
    ]

});