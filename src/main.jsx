import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Home, About, Support, Cart,Blog } from './Pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import ItemPage from './Components/ItemPage.jsx';
import store from './Store/Store.js';
import { Provider } from 'react-redux'


// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/support',
        element:<Support/>
      },
      {
        path:'/blogs',
        element:<Blog/>
      },
      {
        path:'/itemPage',
        element:<ItemPage/>
      },
    ]
  },
]);

// Create the root once
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
    <RouterProvider router={router}  />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
