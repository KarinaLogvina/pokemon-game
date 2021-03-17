import { useState } from 'react';
import HomePage from './components/routes/Home/index';
import GamePage from './components/routes/Game/index';

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    setPage(page)
  }

  switch (page) {
    case 'app':
      return <HomePage onChangePage={handleChangePage} />
    case 'game':
      return <GamePage onChangePage={handleChangePage} />
    default:
      return <HomePage onChangePage={handleChangePage} />
  }
}

export default App;