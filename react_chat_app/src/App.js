import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import Messenger from './Components/Messenger';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  



  return (

<Provider store={store}>
<Messenger/>
</Provider>
  );
}

export default App;
