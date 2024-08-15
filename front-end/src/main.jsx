import './styles/theme.css'
import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './views/MainPage/MainPage.jsx'
import { Favourites } from './views/Favourites/Favourites.jsx'
import { Cart } from './views/Cart/Cart.jsx'
import { ProductList } from './views/ProductList/ProductList.jsx'
import { ProductDetails } from './views/ProductDetails/ProductDetails.jsx'
import { Layout } from './components/Layout/Layout.jsx'

const router = createBrowserRouter([
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
        path: '/:gender',
        element: <MainPage />,
        loader: ({ params }) => {
          const PATH_TO_ENDPOINT_MAPPING = {
            kobieta: 'women',
            mezczyzna: 'men',
            dziecko: 'children',
          }

          const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender]

          return fetch(`http://localhost:3000/${backEndPath}`)
        },
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
