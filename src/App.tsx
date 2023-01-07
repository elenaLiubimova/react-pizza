import React, { Suspense } from 'react';

import './scss/app.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import('./pages/Cart'));
const FullPizza = React.lazy(() => import('./pages/FullPizza'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        ></Route>
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
