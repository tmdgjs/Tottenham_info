import React from 'react';

import './App.css';
import Main from './component/main'
import Header from './component/header'
import Footer from './component/footer'
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Main />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
