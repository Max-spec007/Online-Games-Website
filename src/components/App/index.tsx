import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'components/Home'
import GlobalStyles from 'components/GlobalStyles'

const App = (): ReactElement => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
)

export default App
