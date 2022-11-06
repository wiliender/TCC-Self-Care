import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Logon from './pages/Logon';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon />} />
            </Routes>
        </BrowserRouter>
    );
}
