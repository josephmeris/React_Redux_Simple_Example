import {SET_EMAILADDRESS} from './actionTypes'

export function setEmailAddress(emailAddress){
    return {type: SET_EMAILADDRESS, emailAddress}
}