export default ( ) => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //384892374823748234
            date: new Date().toDateString(), //sat 23, June
            text: 'Culpa ipsum mollit excepteur do qui Lorem.',
            picture: null, //https://
        },
        {
            id: new Date().getTime() +1000, //384892374823748234
            date: new Date().toDateString(), //sat 23, June
            text: 'Pariatur enim irure commodo dolor fugiat consequat ullamco exercitation tempor adipisicing proident.',
            picture: null, //https://
        },
        {
            id: new Date().getTime() +2000, //384892374823748234
            date: new Date().toDateString(), //sat 23, June
            text: 'Incididunt minim irure eu ullamco.',
            picture: null, //https://
        },

    ]
})