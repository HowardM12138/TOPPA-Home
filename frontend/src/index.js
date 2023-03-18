/* Package Import */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

/* Component Import */
import PortalHomePage from "./components/PortalHomePage";
import SignIn from "./components/SignIn";
import Reimbursement from "./components/Reimbursement";
import BondingGroup from "./components/BondingGroup";
import Attendance from "./components/AttendancePage/Attendance";
import KudoBoard from "./components/KudoBoard/KudoBoard";

/* Style Import */
import "./index.css";

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
    path: "Reimbursement",
    element: <Reimbursement />,
  },
  {
    path: "BondingGroupBoard",
    element: <BondingGroup />,
  },
  {
    path: "Attendance",
    element: <Attendance />,
  },
  {
    path: "KudoBoard",
    element: <KudoBoard />,
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
