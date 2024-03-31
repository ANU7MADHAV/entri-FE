import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Signup from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import AdminSigninPage from "./pages/AdminSigninPage";
import Admin from "./pages/Admin";
import AdminInstructorAdd from "./pages/AdminInstructorAdd";
import AdminInstructorPage from "./pages/AdminInstructorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin/signin",
    element: <AdminSigninPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/instructor",
    element: <AdminInstructorPage />,
  },
  {
    path: "/admin/instructor/add-new",
    element: <AdminInstructorAdd />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
