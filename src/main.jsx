import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './LayOut/Layout.jsx';
import HomePage from './Component/HomePage/HomePage.jsx';
import ProjectDatiles from './Component/ProjectDatiles/ProjectDatiles.jsx';
import AllProject from './Component/AllProject/AllProject.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/allProject',
        element:<AllProject></AllProject>
      },
      {
        path: '/project/:id',
        element: <ProjectDatiles></ProjectDatiles>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
