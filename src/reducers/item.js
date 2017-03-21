import { SET_FLIGHTS, SHOW_ALL, FETCH_FLIGHTS_PENDING, FETCH_FLIGHTS_FULFILLED, FETCH_FLIGHTS_REJECTED  } from '../constants/actionTypes';
const InitialState = {
    flights: [],
    filterName:'',
    fetching:false,
    fetched:false,
    error: null
};

export default function items(state = InitialState, action) {
    switch (action.type) {
        case SET_FLIGHTS:
            return {
                ...state,
                filterName: action.name
            };
        case FETCH_FLIGHTS_PENDING:
            return {
                ...state,
                fetching:true
            };
            break;

        case FETCH_FLIGHTS_FULFILLED:
            return {
                ...state,
                flights: action.payload.data.flights,
                fetched: true,
                fetching: false
            };
            break;

        case FETCH_FLIGHTS_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload.data
            };
            break;

        case SHOW_ALL:
            return {
                ...state,
                filterName: ''
            };
        default:
            return state;
    }
}
