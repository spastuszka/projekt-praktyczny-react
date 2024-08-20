import './styles/theme.css'
import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './views/MainPage/MainPage.jsx'
import { Favourites } from './views/Favourites/Favourites.jsx'
import { Cart } from './views/Cart/Cart.jsx'
import { ProductList } from './views/ProductList/ProductList.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { mainPageLoader } from './api/mainPageLoader.js'
import { productListLoader } from './api/productListLoader.js'
import { ProductDetails } from './views/ProductDetails/ProductDetails.jsx'
import { productLoader } from './api/productLoader.js'
import { addProductToFavouritesAction } from './api/addProductToFavouritesAction.js'

const router = createBrowserRouter([
  {
    path: '/add-to-favourites/:productId',
    action: addProductToFavouritesAction,
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/koszyk',
        element: <Cart />,
      },
      {
        path: '/ulubione',
        element: <Favourites />,
      },
      {
        path: '/:gender?',
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: '/:gender/:category/:subcategory?',
        element: <ProductList />,
        loader: productListLoader,
      },
      {
        path: '/:gender/:category/:subcategory/:productId',
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
