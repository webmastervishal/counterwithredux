const actions = {
    INCREMENT_COUNT: 'INCREMENT_COUNT',
    incCount : (payload) => {
        //heavy computings fetching data
        return (dispatch) => {
            setTimeout(() => {
                dispatch({type: actions.INCREMENT_COUNT,payload});
            },2000);
        }
    },
    DECREMENT_COUNT: 'DECREMENT_COUNT',
    decCount: (payload) => ({type: actions.DECREMENT_COUNT,payload})
}

export default actions;

// const actions = {
//     incCount: (payload) => ({type: 'INCREMENT_COUNT',payload})
// }