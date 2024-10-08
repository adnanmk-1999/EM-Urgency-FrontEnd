import React from 'react';
import './App.css';
import FooterPage from './components/appLayout/footer/footer';
import UserContextProvider from "./context/provider/userContextProvider";
import RouterIndex from './routers';


function App() {
  return (
    <UserContextProvider>
      <>
        <RouterIndex />
        <FooterPage />
      </>
    </UserContextProvider>
  );
};

export default App;