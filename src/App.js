import MyRouter from './components/routers';
import React from 'react';
import './App.css';
import FooterPage from './components/appLayout/footer/footer';


function App(){
  return(
    <>
    <MyRouter/>
    <FooterPage/>
    </>
  );
};

export default App;