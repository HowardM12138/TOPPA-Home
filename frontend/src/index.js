/* Package Import */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

/* Component Import */
import PortalHomePage from "./components/PortalHomePage";
import SignIn from "./components/SignIn";

/* Style Import */
import "./index.css";
import Attendance from "./components/Attendance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortalHomePage />,
    errorElement: <PortalHomePage />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "attendance",
    element: <Attendance />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="825257094322-i2kbt4aa3i3tp3a3cmfdh41uqc8b69s7.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
