import { vehicleConstants } from "../actions/constants";


const initialState = {
    economyList: [],
    estateList: [],
    luxuryList: [],
    suvList: [],
    cargoList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case vehicleConstants.ADD_ECONOMY_VEHICLE:
            state = {
                ...state,
                economyList: [...state.economyList, action.payload.form]
            }
            break;
        case vehicleConstants.ADD_ESTATE_VEHICLE:
            state = {
                ...state,
                estateList: [...state.estateList, action.payload.form]
            }
            break;
        case vehicleConstants.ADD_LUXURY_VEHICLE:
            state = {
                ...state,
                luxuryList: [...state.luxuryList, action.payload.form]
            }
            break;
        case vehicleConstants.ADD_SUV_VEHICLE:
            state = {
                ...state,
                suvList: [...state.suvList, action.payload.form]
            }
            break;
        case vehicleConstants.ADD_CARGO_VEHICLE:
            state = {
                ...state,
                cargoList: [...state.cargoList, action.payload.form]
            }
            break;
    }
    return state;
}