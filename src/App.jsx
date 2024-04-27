 

import Home from './pages/homepage/Home'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Listpage from './pages/homepage/listPage/Listpage'
import Layout from './pages/layout/Layout'
import SinglePage from './pages/singlePage/SinglePage'
import Login from './pages/login/Login'
import ProfilePage from './pages/profilePage/ProfilePage'
import Register from './pages/register/Register'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/list',
          element:<Listpage/>,
          
         
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:'/:id',
          element:<SinglePage/>,
         
        },
        {
          path:'/login',
          element:<Login/>,
         
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    },

    
    
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App