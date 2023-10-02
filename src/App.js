import { Route, Routes } from 'react-router-dom'
import React from 'react';

import TransformersOne from "./pages/TransformersOne";
import TransformersTwo from './pages/TransformersTwo';
import TransformersThree from './pages/TransformersThree';
import TransformersFour from './pages/TransformersFour';
import TransformersFive from './pages/TransformersFive';
import TransformersSix from './pages/TransformersSix';
import TransformersSeven from './pages/TransformersSeven';

import Navbar from './components/layout/NavbarPages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<TransformersOne />} />
        <Route path='/transformerstwo' element={<TransformersTwo />} />
        <Route path='/transfromersthree' element={<TransformersThree />} />
        <Route path='/transformersfour' element={<TransformersFour />} />
        <Route path='/transformersfive' element={<TransformersFive />} />
        <Route path='/transformerssix' element={<TransformersSix />} />
        <Route path='/transformersseven' element={<TransformersSeven />} />
      </Routes>
    </>
  )
};

export default App;
