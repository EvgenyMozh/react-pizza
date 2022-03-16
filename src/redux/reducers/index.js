import { combineReducers } from 'redux'
import filtersReduser from '../reducers/filters';
import pizzasReduser from '../reducers/pizzas';

const rootReduser = combineReducers({
   filters: filtersReduser,
    pizzas: pizzasReduser
})

export default rootReduser