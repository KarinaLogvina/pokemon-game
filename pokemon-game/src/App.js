import { Route, Switch, useRouteMatch, Redirect, useLocation } from 'react-router-dom';
import cn from 'classnames';
import HomePage from './components/routes/Home';
import GamePage from './components/routes/Game';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/index';
import AboutPage from './components/routes/About';
import ContactPage from './components/routes/Contact';

import s from './app.module.css';
import { FirebaseContext } from './components/context/firebaseContext';
import Firebase from './components/services/firebase';

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === 'game/board'


  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding,
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
    </FirebaseContext.Provider>
  )
}

export default App;