/* Package Import */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

/* Component Import */
import PortalHomePage from "./components/Mainpage/PortalHomePage";
import SignIn from "./components/SignIn";
import Reimbursement from "./components/Reimbursement/Reimbursement";
import BondingGroup from "./components/Bonding/BondingGroup";
import Attendance from "./components/AttendancePage/Attendance";
import KudoBoard from "./components/KudoBoard/KudoBoard";
import Members from "./components/MembersPage/Members";
import Profile from "./components/MembersPage/Profile";
import Info from "./components/MembersPage/Info";
import KudoSubmit from "./components/KudoBoard/KudoSubmit";
import Calendar from "./components/CalendarPage/Calendar";
import SignInFailure from "./components/SignInFailure";
import SignUp from "./components/SignUp";

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
		path: "sign-up",
		element: <SignUp />,
	},
	{
		path: "sign-in-failure",
		element: <SignInFailure />,
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
	{
		path: "KudoBoard/KudoSubmit",
		element: <KudoSubmit />,
	},
	{
		path: "TOPPASchedule",
		element: <Calendar />,
	},
	{
		path: "Members",
		element: <Members />,
	},
	{
		path: "submitinfo",
		element: <Info />,
	},
	{
		path: "Members/:memberName",
		element: <Profile />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<GoogleOAuthProvider clientId='825257094322-i2kbt4aa3i3tp3a3cmfdh41uqc8b69s7.apps.googleusercontent.com'>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</GoogleOAuthProvider>
);
