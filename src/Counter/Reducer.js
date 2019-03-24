import actions from './Actions';

const initialState = {
    count: 0
}

const Reducer = (state = initialState,action) => {
    console.log(action);
    switch(action.type) {
        case actions.INCREMENT_COUNT:
            // console.log('inside the reducer',action);
            return {
                count: state.count + action.payload
            };
        case actions.DECREMENT_COUNT:
            // console.log('inside the reducer', action);
            return {
                count: state.count - action.payload
            }
        default: 
            return state;
    }
}

export default Reducer;