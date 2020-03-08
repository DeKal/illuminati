import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import 'typeface-roboto'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from 'core/containers/App'
import Theme from 'core/theme/ThemeWrapper'
import * as serviceWorker from 'serviceWorker'
import initStore from 'core/init/initStore'

const Root = (
  <Provider {...initStore()}>
    <Router basename="/cms">
      <Theme>
        <App />
      </Theme>
    </Router>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
