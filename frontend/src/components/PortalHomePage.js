/* Component Import */
import DashPad from "./DashPad";

/* MUI Import */
import { Grid, AppBar, Typography } from "@mui/material";

export default function PortalHomePage() {
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
			<AppBar sx={{ height: 50 }}>
				<Grid
					container
					alignItems='center'
					justifyContent='center'
					sx={{ height: 1 }}>
					<Typography variant='h6'>TOPPA Member Portal</Typography>
				</Grid>
			</AppBar>
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
