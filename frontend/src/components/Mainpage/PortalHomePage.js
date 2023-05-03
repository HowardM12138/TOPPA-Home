/* Package Import */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* Component Import */
import DashPad from "./DashPad";
import { getUser } from "../UserSession";
import NavBar from "../NavBar";
import { Grid, Typography } from "@mui/material";

export default function PortalHomePage() {
	const navigate = useNavigate();
	const [Props, setProps] = useState([]);

	useEffect(() => {
		getUser().then((result) => {
			if (!result) {
				console.log("user not validated");
				navigate("/sign-in");
				return;
			} else {
				setProps(result);
			}
		});
	}, []);

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
		{
			name: "Members",
			icon: "members",
		},
	];

	return (
		<div>
			<NavBar />
			<Grid container sx={{ mt: 10 }}>
				<Grid
					container
					xs={5}
					sx={{ bgcolor: "#2F9E41", borderRadius: 4, ml: 7, mr: 2 }}>
					<Grid item xs={12} sx={{ textAlign: "center", mt: 10 }}>
						<Typography
							variant='h4'
							sx={{ fontWeight: "bold", fontStyle: "italic" }}>
							Welcome Home, {Props && Props.name}!
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Typography
							variant='h5'
							sx={{ fontWeight: "bold", fontStyle: "italic" }}>
							Exective Role: {Props && Props.execRole}
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Typography
							variant='h5'
							sx={{ fontWeight: "bold", fontStyle: "italic" }}>
							Project Team: {Props && Props.projTeam}
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ textAlign: "center" }}>
						<Typography
							variant='h5'
							sx={{ fontWeight: "bold", fontStyle: "italic" }}>
							Toppa Age: {Props && Props.toppaAge}
						</Typography>
					</Grid>
				</Grid>

				<Grid
					container
					direction='row'
					rowSpacing={15}
					justifyContent='center'
					alignItems='center'
					xs={6}>
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
