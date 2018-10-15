import {combineReducers} from 'redux';
import emailAddress from './emailAddressReducer';

const appReducer = combineReducers({
    emailAddress
})

const rootReducer = (state, action) => {
    //method prepared to handle resetting of global stores states
    return appReducer(state, action)
}

export default rootReducer; 