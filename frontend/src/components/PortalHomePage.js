/* Package Import */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Component Import */
import DashPad from "./DashPad";
import { validateUser } from "./UserSession";
import NavBar from "./NavBar";

/* MUI Import */
import { Grid } from "@mui/material";

export default function PortalHomePage() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!validateUser()) {
			console.log("user not validated");
			navigate("/sign-in");
			return;
		}
	});

	const redirects = [
		{
			name: "TOPPA Schedule",
			icon: "schedule",
		},
		{
			name: "Reimbursement",
			icon: "payments",
		},
		{
			name: "Bonding Group Board",
			icon: "peopleAlt",
		},
		{
			name: "Kudo Board",
			icon: "celebration",
		},
		{
			name: "Attendance",
			icon: "factCheck",
		},
	];

	return (
		<div>
			<NavBar />
			<Grid container sx={{ mt: 15 }}>
				<Grid
					container
					direction='row'
					rowSpacing={10}
					justifyContent='center'
					alignItems='center'>
					{redirects.map((redir) => {
						return (
							<Grid item container md={4} justifyContent='center'>
								<DashPad name={redir.name} icon={redir.icon} />
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</div>
	);
}
