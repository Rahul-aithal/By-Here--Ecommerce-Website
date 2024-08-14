// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './Store/store.js';
import './index.css';
import App from './App'; 
import { About, Blog, BlogDetail, Cart, Home, ItemPage, Support, AllItmes } from './Pages/index.js';

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap all routes with App
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      { path: "/support", element: <Support /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/blogs/:id", element: <BlogDetail /> },
      { path: "/item-page", element: <ItemPage /> },
      { path: "/all-items-page", element: <AllItmes /> }
    ]
  }
]);

// Create the root once
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
