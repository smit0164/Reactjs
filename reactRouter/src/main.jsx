import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import Contact from './components/Contact/contact.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import Github,{githubInfoLoader} from './components/GitHub/Github.jsx'





let router = createBrowserRouter([
  {
    Component:Layout,
    children: [
      { index: true, Component:Home },
      { path: "contact", Component:Contact },
      { path:"about",Component:About},
      {path:"user/:userid",Component:User},
      {path:"github",Component:Github,loader:githubInfoLoader}
    ],
  },
  
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
