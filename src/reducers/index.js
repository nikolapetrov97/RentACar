import { combineReducers } from 'redux';
import customersReducer from './customers.reducer';
import vehiclesReducer from './vehicles.reducer';


const rootReducer = combineReducers({
       vehicles: vehiclesReducer,
       customers: customersReducer
});

export default rootReducer;