import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import behaviourReducer from './reducer/behaviourReducer';
import evaluationReducer from './reducer/evaluationReducer';
import qualityReducer from './reducer/qualityReducer';
import respondenReducer from './reducer/respondenReducer';
import stepperReducer from './reducer/stepperReducer';

const reducers = combineReducers({
    steps:stepperReducer,
    responden:respondenReducer,
    quality:qualityReducer,
    behaviour:behaviourReducer,
    evaluation:evaluationReducer,
})

const middleware = applyMiddleware(thunk)
const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, newCompose(middleware))

export default store;