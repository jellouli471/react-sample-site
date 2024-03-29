import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './pages/shop/shop.jsx';
import './index.css'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
