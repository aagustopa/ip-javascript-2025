import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from "react-router";
import { RouterProvider } from 'react-router';
import { router } from './routes.tsx';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </BrowserRouter> */}

  </StrictMode>
);
