import actions from './Actions';

const initialState = {
    count: 0
}

const Reducer = (state = initialState,{type,payload}) => {
    switch(type) {
        case actions.UPDATE_COUNT:
            return {
                count: payload
            }
        default: 
            return state;
    }
}

export default Reducer;