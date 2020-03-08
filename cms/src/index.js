import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import 'typeface-roboto'
import { BrowserRouter as Router } from 'react-router-dom'
import App from 'core/components/App'
import Theme from 'core/theme/ThemeWrapper'
import * as serviceWorker from 'serviceWorker'
import initAppProps from 'core/init/initGlobal'

const Root = (
  <Router>
    <Theme>
      <App {...initAppProps()} />
    </Theme>
  </Router>
)

ReactDOM.render(Root, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
