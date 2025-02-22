import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.jsx'

import Nav from './layout/nav/Nav.jsx';
import Details from './layout/details.jsx/Details.jsx';


import "../src/a-sass/base/base.scss"
import "../src/a-sass/base/main.scss"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Nav />}>
        <Route index element={<App />} />
        <Route path='details' element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
