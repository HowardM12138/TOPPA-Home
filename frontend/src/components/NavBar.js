/* Package Import */
import { useNavigate } from "react-router-dom";

/* Component Import */
import { clearUser } from "./UserSession";

/* MUI Import */
import { Grid, AppBar, Typography, Button } from "@mui/material";
import Home from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

export default function NavBar() {
	const navigate = useNavigate();
	return (
		<AppBar sx={{ height: 50, bgcolor: "#2F9E41", position: "sticky" }}>
			<Grid container justifyContent='center' sx={{ height: 1, width: 1 }}>
				<Grid
					container
					item
					justifyContent='space-between'
					alignItems='center'
					sx={{ height: 1, width: 0.97 }}>
					<IconButton
						onClick={() => {
							navigate("/");
						}}>
						<Home />
					</IconButton>
					<Typography variant='h6'>TOPPA Member Portal</Typography>
					<Button
						variant='contained'
						onClick={() => {
							clearUser();
							navigate("/sign-in");
						}}
						sx={{ bgcolor: "#058743" }}>
						Log Out
					</Button>
				</Grid>
			</Grid>
		</AppBar>
	);
}
