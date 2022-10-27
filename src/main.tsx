import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Personagens from './pages/Personagens'
import Magias from './pages/Magias'
import ErrorPage from './pages/Error'
import Default from './pages/Default'

import '../src/scss/styles.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Default />
      },
      {
        path: "/personagens",
        element: <Personagens />
      },
      {
        path: "/magias",
        element: <Magias />,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
