import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import MainComponent from './components/MainComponent';
import OtherPage from './components/OtherPage';

function App () {
  return (
    <Router>
      <Fragment>
        <header>
          <div> This is a multicontainer app </div>
          <Link to='/'> Home </Link>
          <Link to='/otherpage'> Other Page </Link>
        </header>
        <div>
          <Routes>
            <Route exact path='/' Component={MainComponent} />
            <Route path='/otherpage' Component={OtherPage} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
