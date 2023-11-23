import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    },
  ];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);