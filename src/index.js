import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './tailwind.css';

import SalesPage from "./routes/sales";
import ErrorPage from "./routes/error-page";

import Layout from "./components/layout";

import NoPerms from "./routes/no-perms";
import Logistics from "./routes/logistics"
import AddItem from './routes/addItem';
import Accounting from "./routes/accounting"
import Login from './routes/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><SalesPage/></Layout>,
    errorElement: <ErrorPage/>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "logistics",
    element: <Layout><Logistics/></Layout>
  },
  {
    path: "logistics/add",
    element: <Layout><AddItem/></Layout>
  },
  {
    path: "accounting",
    element: <Layout><Accounting/></Layout>
  },
  {
    path: "team",
    element: <Layout><NoPerms/></Layout>
  },
  {
    path: "schedule",
    element: <Layout><NoPerms/></Layout>
  },
  {
    path: "login",
    element: <Login/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="h-screen">
    
    <ToastContainer />
    <RouterProvider router={router} />

  </div>
);

