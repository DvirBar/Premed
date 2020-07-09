import { 
    GET_MESSAGE,
    GET_ERROR
} from './types';


export const getMessage = msg => {
    return {
        type: GET_MESSAGE,
        payload: {
            msg: msg.msg,
            status: msg.status
        }
    }
}


export const getError = error => {
    return {
        type: GET_ERROR,
        payload: {
            msg: error.response.data.msg,
            status: error.response.status
        }
    }
}
