import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './RootLayout/Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './page/About/About.jsx'
import Contact from './page/Contact/Contact.jsx'
import Catagory from './page/Catagory/Catagory.jsx'
import AllProducts from './page/AllProducts/AllProducts.jsx'
// import Contact from './page/About/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'catagory', element: <Catagory /> },
      {path: 'allproducts', Component: AllProducts}
    ]
  }
], {
  basename: "/haat-bazar"
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
