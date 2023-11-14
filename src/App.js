import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Builderpage from './Pages/Builderpage';
import Homepage from './Pages/Homepage';

import './assets/sass/styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/builder' element={<Builderpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>;
}

export default App;
