//exportaremos un objeto que importaremos en router de src

export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),

        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue'),
            //mapear propiedad creada en la view entry para leer el id
            props: ( route ) => {
                return {
                    //mapeo del id cuando se crea el componente entry
                    id: route.params.id
                }
            }

        }
    ]

}