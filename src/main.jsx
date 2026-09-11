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
import DashboardLayout from './Dashboard/DashboardLayout.jsx'
import Overview from './Dashboard/Overview.jsx'
import AddProducts from './Dashboard/AddProducts.jsx'
import Orders from './Dashboard/Orders.jsx'
import Products from './page/Products/Products.jsx'
import AddProductsShow from './Dashboard/AddProductsShow.jsx'
import OrderForm from './page/OrderForm/OrderForm.jsx'
import Users from './Dashboard/Users.jsx'
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
      { path: 'allproducts', Component: AllProducts },
      {path: 'order', Component: OrderForm}
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path:"products",
        element: <AddProductsShow></AddProductsShow>
      },
      {
        path: "add-product",
        element: <AddProducts />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "users",
        element: <Users />,
      },
      // {
      //   path: "settings",
      //   element: <Settings />,
      // },
    ],
  }

], {
  basename: "/haat-bazar"
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
