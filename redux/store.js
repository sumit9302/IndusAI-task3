
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todosReducers } from './reducers/TodosReducer';
import { tabReducer } from './reducers/TabReducer';

const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
