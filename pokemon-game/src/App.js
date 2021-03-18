import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import cn from 'classnames';
import HomePage from './components/routes/Home';
import GamePage from './components/routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/index'
import s from './app.module.css'

const App = () => {
  const match = useRouteMatch('/')

  return (
    <Switch>
      <Route path="/404" render={() => (
        <h1>404 Not Found</h1>
      )} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {
            [s.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />

            </Switch>
          </div>
          <Footer />
        </>
      </Route>
      <Route render={() => {
        <Redirect to="/404" />
      }} />
    </Switch>
  )
}

export default App;