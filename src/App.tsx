import React from 'react';
import './App.css';
import {Store} from './store';
import {Link} from '@reach/router';


function App(props:any):JSX.Element {
  const {state} = React.useContext(Store);

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/faves">Favourites: {state.favourites.length}</Link>


        </div>
      </header>
      {props.children}

    </>
  );
}

export default App;
