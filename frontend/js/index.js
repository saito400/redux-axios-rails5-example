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
import { Navi, Count, Count2, Home, Test, Todo } from './components'

import {fetchData} from './actions/index'

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
  store.dispatch(fetchData('http://localhost:3000/todos.json'))
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Navi}>
          <IndexRoute component={Home}/>
          <Route path="/count" component={Count}/>
          <Route path="/count2" component={Count2}/>
          <Route path="/test" component={Test}/>
          <Route path="/todo" component={Todo} onEnter={loadData} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
