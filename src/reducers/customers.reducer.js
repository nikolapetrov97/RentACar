import { customerConstants } from "../actions/constants";


const initialState = {
    customerList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case customerConstants.ADD_CUSTOMER:
            state = {
                ...state,
                customerList: [...state.customerList, action.payload.form]
            }
            break;

        case customerConstants.UPDATE_CUSTOMER:
            state = {
                ...state,
                customerList: state.customerList.map(customer =>
                    customer.id == action.payload.form.id ?
                        {
                            ...customer,
                            name: action.payload.form.name,
                            email: action.payload.form.email,
                            phone: action.payload.form.phone
                        } : customer
                )
            }
            break;
        
        case customerConstants.DELETE_CUSTOMER:
            state = {
                ...state,
                customerList: state.customerList.filter((customer) => customer.id !== action.payload)
            }
            break;
    }
    return state;
}