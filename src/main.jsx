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
import MyProducts from './Pages/MyProductsPage/MyProducts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddProductsPage from './Pages/AddProducts/AddProductsPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/MyProfile/MyProfile';
import UpdateForm from './Pages/Update/UpdateForm';
import AllProductLoader from './Pages/AllProduct/AllProductLoader';
import AllProductDetails from './Pages/AllProduct/AllProductDetails';

const queryClient = new QueryClient();

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
        path: '/allItem',
        element: <AllProductLoader></AllProductLoader>,
      },
      {
        path: '/myProducts',
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>,
          </PrivateRoute>
        ),
      },
      {
        path: '/updateProducts/:id',
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myProducts/${params.id}`),
      },
      {
        path: '/addProducts',
        element: (
          <PrivateRoute>
            <AddProductsPage></AddProductsPage>,
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>,
          </PrivateRoute>
        ),
      },
      {
        path: '/myProfile',
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>,
          </PrivateRoute>
        ),
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
      {
        path: '/addProductsForm/:id',
        element: (
          <PrivateRoute>
            <AddProductsForm></AddProductsForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allItem/${params.id}`),
      },
      {
        path: '/allItem/:id',
        element: (
          <PrivateRoute>
            <AllProductDetails></AllProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allItem/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
