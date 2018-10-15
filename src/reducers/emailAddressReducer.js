import {SET_EMAILADDRESS} from '../actions/actionTypes';

const initState = "";

export default function emailAddressReducer(state = initState, action){
    switch(action.type){
        case SET_EMAILADDRESS:
            return action.emailAddress;
        
        default:
            return state;
    }
}