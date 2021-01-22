import { vehicleConstants } from "./constants"


export const addVehicle = (type, form) => {
    return async dispatch => {
        switch(type){
            case "Economy":
                dispatch({
                    type: vehicleConstants.ADD_ECONOMY_VEHICLE,
                    payload: { form }
                })
            break;

            case "Estate":
                dispatch({
                    type: vehicleConstants.ADD_ESTATE_VEHICLE,
                    payload: { form }
                })
            break;

            case "Luxury":
                dispatch({
                    type: vehicleConstants.ADD_LUXURY_VEHICLE,
                    payload: { form }
                })
            break;

            case "Suv":
                dispatch({
                    type: vehicleConstants.ADD_SUV_VEHICLE,
                    payload: { form }
                })
            break;

            case "Cargo":
                dispatch({
                    type: vehicleConstants.ADD_CARGO_VEHICLE,
                    payload: { form }
                })
            break;

            default:
                console.log("No case")
        }
    }
}