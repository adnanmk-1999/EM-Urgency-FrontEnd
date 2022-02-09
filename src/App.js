import React from 'react';
import './App.css';
import FooterPage from './components/appLayout/footer/footer';

import RouterIndex from './routers';


function App(){
  return(
    <>
      <RouterIndex />
      <FooterPage />
    </>
  );
};

export default App;