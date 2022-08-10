import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { createStore } from './store/createStore'
import { Provider } from 'react-redux'
// import history from './utils/history'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    {/* <Router history={history}> */}
      <App />
    {/* </Router> */}
  </Provider>

)

reportWebVitals()
