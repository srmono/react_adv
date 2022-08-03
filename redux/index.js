const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_COOKIE = 'BUY_COOKIE';

//action creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyCookies(){
    return {
        type: BUY_COOKIE,
        info: "First redux action"
    }
}

//(prevstate, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfCookies: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialCookieState = {
    numOfCookies: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const cookieReducer = (state = initialCookieState, action) => {
    switch(action.type) {
        case BUY_COOKIE: return {
            ...state,
            numOfCookies: state.numOfCookies - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    cookie: cookieReducer
})


const store = createStore(rootReducer);
console.log('Initial state ', store.getState())

const unsubscribe = store.subscribe( () => console.log("updated State", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCookies())
store.dispatch(buyCookies())

unsubscribe()