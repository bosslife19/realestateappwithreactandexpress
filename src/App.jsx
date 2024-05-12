 

import Home from './pages/homepage/Home'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Listpage from './pages/homepage/listPage/Listpage'
import  { RequireAuth,Layout } from './pages/layout/Layout'
import SinglePage from './pages/singlePage/SinglePage'
import Login from './pages/login/Login'
import ProfilePage from './pages/profilePage/ProfilePage'
import Register from './pages/register/Register'
import ProfileUpdatePage from './pages/profileUpdatePage/ProfileUpdatePage'
import NewPostPage from './pages/newPostPage/NewPostPage'
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

    {
      path:'/',
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
      ]
    }
    
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App