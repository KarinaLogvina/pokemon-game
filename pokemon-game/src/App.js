import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import cn from 'classnames';
import HomePage from './components/routes/Home';
import GamePage from './components/routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/index';
import AboutPage from './components/routes/About';
import ContactPage from './components/routes/Contact';

import s from './app.module.css';

const App = () => {
  const match = useRouteMatch('/');
  const homeMatch = useRouteMatch('/home');

  const isMatchHomePage = match.isExact || (homeMatch && homeMatch.isExact)

  return (
    <Switch>
      <Route>
        <>
          <MenuHeader bgActive={!isMatchHomePage} />
          <div className={cn(s.wrap, {
            [s.isHomePage]: isMatchHomePage,
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
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