import { combineReducers } from 'redux';

const initialState = {
    list: []
}

const appendList = (state = initialState, action) => {
    switch (action.type) {
        case "APPEND_TODO_LIST":
            return Object.assign({}, { list: state.list.concat([action.list]) });
        case "DELETE_TODO_LIST":
            let arr = state.list;
            arr = arr.filter(el => {
                return el[0] !== parseInt(action.id);
            })
            console.log(arr);
            return Object.assign({}, state, { list: arr });
        case "COMPLETE_TODO_LIST":
            let array = state.list;
            array = array.map(el => {
                if (el[0] === parseInt(action.id)) {
                    if (el[3] === false) {
                        el.splice(3, 1, true);
                    } else {
                        el.splice(3, 1, false);
                    }
                    return el;
                } else {
                    return el;
                }
            })
            return Object.assign({}, { list: array });
        default:
            return state;
    }

};

export default combineReducers({
    appendList
})