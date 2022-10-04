import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '../src/routes/home'
import Create from '../src/routes/create'
import Event from '../src/routes/event'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/create",
    element: <Create></Create>
  },
  {
    path: "/event",
    element: <Event></Event>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
