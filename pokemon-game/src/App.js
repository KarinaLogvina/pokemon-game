import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';

import bg from '../src/assets/img/bg.jpg'

function App() {

  const color = '#444C5C';
  return (
      <>
          <Header title='Pokemon game' desc='This is pokemon game!' />
          <Layout title='Pokemon game' desc='This is pokemon game!' urlBg={bg}/>
          <Layout title='Pokemon game' desc='This is pokemon game!' colorBg={color}/>
          <Layout title='Pokemon game' desc='This is pokemon game!' urlBg={bg}/>
          <Footer />
      </>
  );
}

export default App;
