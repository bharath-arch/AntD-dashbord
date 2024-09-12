import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Dashboard from './pages/Dashbord';
import Option2 from './pages/Option2';
import Option3 from './pages/Option3';
import Option5 from './pages/Option5';
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement:<p>Error</p>,
    children: [
      {
        path: "",
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        // index: true,
        element: <Dashboard />,
      },
      {
        path: "option2",
        element:<Option2/>
      },
      {
        path: "option3",
        element:<Option3/>
      },
      {
        path: "option5",
        element:<Option5/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
