import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Home from './components/Home'
import Navi from './components/Navi'
import Test from './components/Test'
import TodoMain from './components/TodoMain'

import reducers from './reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Navi}> //TOOD update to use App
        <IndexRoute component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="test" component={Test}/>
        <Route path="todo" component={TodoMain}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

