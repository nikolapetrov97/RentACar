import { customerConstants } from "./constants"


export const addCustomer = (form) => {
    return async dispatch => {
        dispatch({
            type: customerConstants.ADD_CUSTOMER,
            payload: { form }
        })
    }
}

export const updateCustomer = (form) => {
    return async dispatch => {
        dispatch({
            type: customerConstants.UPDATE_CUSTOMER,
            payload: { form }
        })
    }
}

export const deleteCustomer = (id) => {
    return async dispatch => {
        dispatch({
            type: customerConstants.DELETE_CUSTOMER,
            payload: id
        })
    }
}