/* Component Import */
import DashPad from "./DashPad";

/* MUI Import */
import { Grid, Container, AppBar, Typography } from "@mui/material";

export default function PortalHomePage() {
	return (
		<div>
			<AppBar position='static'>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					News
				</Typography>
			</AppBar>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					height: 800,
					justifyContent: "center",
				}}>
				<Grid container direction='row' rowSpacing={10} justifyContent='center'>
					<Grid item container md={4} justifyContent='center'>
						<DashPad name='Example Card' icon='schedule' />
					</Grid>
					<Grid item container md={4} direction='row' justifyContent='center'>
						<DashPad name='Example Card' icon='asdasd' />
					</Grid>
					<Grid item container md={4} justifyContent='center'>
						<DashPad name='Example Card' icon='asdasd' />
					</Grid>
					<Grid item container md={4} justifyContent='center'>
						<DashPad name='Example Card' icon='asdasd' />
					</Grid>
					<Grid item container md={4} justifyContent='center'>
						<DashPad name='Example Card' icon='asdasd' />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
