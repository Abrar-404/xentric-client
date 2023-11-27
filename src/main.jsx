import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './Providers/AuthProvider';
import MainLayout from './Components/Layouts/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import TrendingCardLoader from './Pages/Trending/TrendingCardLoader';
import FeatureCardDetails from './Pages/FeatureCards/FeatureCardDetails';
import TrendingCardDetails from './Pages/Trending/TrendingCardDetails';
import ErrorElements from './Components/ErrorElements/ErrorElements';
import PostReviewForm from './Pages/PostReview/PostReviewForm';
import AddProductsForm from './Pages/AddProducts/AddProductsForm';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/trending',
        element: <TrendingCardLoader></TrendingCardLoader>,
      },
      {
        path: '/featureCards/:id',
        element: <FeatureCardDetails></FeatureCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/featureCards/${params.id}`),
      },
      {
        path: '/trendingCards/:id',
        element: <TrendingCardDetails></TrendingCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trendingCards/${params.id}`),
      },
      {
        path: '/postReviewForm/:id',
        element: (
          <PrivateRoute>
            <PostReviewForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trendingCards/${params.id}`),
      },
      {
        path: '/addProductsForm/:id',
        element: (
          <PrivateRoute>
            <AddProductsForm></AddProductsForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trendingCards/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
