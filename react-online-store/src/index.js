import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/home/home';
import Products from './components/products/products';
import About from './components/about/about';
import Nav from './components/navigation/navigation';
import Footer from './components/footer/footer';
import { useLocation } from 'react-router-dom';


// const paths = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     exactpath: '/',
//     element: < Home />
//   },
//   {
//     path: '/products',
//     element: < Products />
//   },
//   {
//     path: '/about',
//     element: < About />
//   },
//   {
//     path: '/',
//     element: <Footer />
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    {/* <RouterProvider> router={paths} </RouterProvider> */}

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
