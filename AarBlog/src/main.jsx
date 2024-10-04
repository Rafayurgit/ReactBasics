import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter} from 'react-router-dom'
import {AuthLayout, Login} from './Components/index.js'

import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";


import Post from "./pages/Post";

import AllPost from "./pages/AllPost.jsx";


const router = createBrowserRouter([
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
    element:<Home/>,
    },
    {
      path:'/login',
      element:(
        <AuthLayout authentication={false}>
          <login/>
        </AuthLayout>
      )
    },
    {
      path:'/signup',
      element:(
        <AuthLayout authentication={false}>
          <SignUp/>
        </AuthLayout>
      )
    },
    {
      path:'/all-post',
      element:(
        <AuthLayout authentication>
          {" "}
          <AllPost/>
        </AuthLayout>
      )
    },
    {
      path:'/add-post',
      element:(
        <AuthLayout authentication>
          {" "}
          <AddPost/>
        </AuthLayout>
      )
    },
    {
      path:'/edit-post/:slug',
      element:(
        <AuthLayout authentication>
          {" "}
          <EditPost/>
        </AuthLayout>
      )
    },
    {
      path:'/post/:slug',
      element:<Post/>
    } 
  ]

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
