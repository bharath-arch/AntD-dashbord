import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashbord';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);
// interface SelectedOptionProps {
//   selectedOption: string;
// }

const SelectedOption: React.FC = () => {
  return (
    // <div style={{ padding: 16, backgroundColor: '#f0f2f5', height: '100%' }}>
    //   <h2>Selected Option</h2>
    //   <p>{selectedOption}</p>
    // </div>
    <RouterProvider router={router} />
  );
};

export default SelectedOption;
