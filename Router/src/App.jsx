
import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import { Children } from 'react';
import Courses from './components/Courses.jsx';
import Reports from './components/Reports.jsx';
import Notfound from './components/Notfound.jsx';
import ParamsComp from './components/paramsComp.jsx';

const router = createBrowserRouter(
    [
      {
         path : '/',
         element: 
         <div>
          <Navbar /><Home />
          </div>
      },
      {
          path : '/about',
         element: 
         <div>
          <Navbar /><About/>
          </div>
      },
      {
          path : '/dashboard',
         element: 
         <div>
          <Navbar /><Dashboard/>
          </div>,

                children: [
                      {
                         path : "courses",
                          element: <Courses/>
                      },
                     {
                            path : "reports",
                            element: <Reports/>
                      },
                            ]
      },
      {
            path: '/student/:id',
            element: <ParamsComp />
      },
      {
          path: "*",
          element: <Notfound/>
      },
    ]
  );

function App() {

  return (
    
     <div>
            
            <RouterProvider router={router}/>
     </div>
  
  )
}

export default App
