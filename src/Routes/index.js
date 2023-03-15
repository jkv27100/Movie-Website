import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, FavoritePage } from '../pages/index';

function MovieRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorite' element={<FavoritePage />} />
    </Routes>
  );
}

export default MovieRoutes;
