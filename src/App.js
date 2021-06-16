import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import SideBar from './components/organisms/SideBar';
import garlandActions from './state/ducks/garlands/actions';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(garlandActions.getLevelingAction());
        }}
      >
        test
      </button>
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
