/* React Import */
import React from "react";
import ReactDOM from "react-dom/client";
/* Component Import */
import PortalHomePage from "./components/PortalHomePage";
/* Style Import */
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<PortalHomePage />
	</React.StrictMode>
);
