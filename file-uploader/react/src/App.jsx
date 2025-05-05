import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Fragment } from 'react';
// import MainComponent from './components/MainComponent';
// import OtherPage from './components/OtherPage';
import ListOfValues from './components/ListOfValues';

function App () {
  return (
    <>
      <Router>
        <header>
          <div> This is a multicontainer app </div>
          <Link to='/'> Home </Link>
          <Link to='/values'> values </Link>

          {/* <Link to='/otherpage'> Other Page </Link> */}
        </header>
        <div>
          <div />
          <Routes>
            <Route exact path='/values' Component={ListOfValues} />

            {/* <Route exact path='/' Component={MainComponent} />
            <Route path='/otherpage' Component={OtherPage} /> */}
          </Routes>
        </div>
      </Router>
      <ListOfValues />
    </>
  );
}

export default App;
