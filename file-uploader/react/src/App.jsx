// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Fragment } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
// import MainComponent from './MainComponent'

function App() {
  return (
     <Router>
      <Fragment>
      <header>
        <div> This is a multicontainer app </div>
        <Link to='/'> Home </Link>
        <Link to='/otherpage'> Other page </Link>
      </header>
      <div>
        <Route path='/otherpage' component={OtherPage} />
      </div>
      </Fragment>
    </Router>
    );
}

export default App
