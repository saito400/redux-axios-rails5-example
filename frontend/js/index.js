import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import { Navi, Count, Home, TodoMain } from './components'

import {searchTodo} from './actions/index'

import thunk from 'redux-thunk'


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)

const store = createStore(
  reducer,
  enhancer
)

const history = syncHistoryWithStore(browserHistory, store)

function loadData() {
  store.dispatch(searchTodo('/todos.json'))
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Navi}>
          <IndexRoute component={Home}/>
          <Route path="/count" component={Count}/>
          <Route path="/todo" component={TodoMain} onEnter={loadData} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
