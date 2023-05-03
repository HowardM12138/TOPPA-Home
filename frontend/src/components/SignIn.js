/* Package Import */
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

/* Component Import */
import { getUser, saveUser } from "./UserSession";

/* MUI Import */
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { backendLink } from "./meta";

export default function SignIn() {
	const navigate = useNavigate();

	const handleSuccess = (res) => {
		var userDecode = jwtDecode(res.credential);
		var user = {
			email: userDecode.email,
			name: userDecode.name,
			picture_url: userDecode.picture,
		};
		saveUser(user);
		getUser().then((result) => {
			if (result) {
				navigate("/");
			} else {
				navigate("/sign-up");
			}
		});
	};

	const handleFailure = (red) => {
		navigate("sign-in");
	};
	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: "100vh" }}>
			<Grid item xs={3}>
				<Card
					variant='outlined'
					sx={{
						width: 300,
						height: 300,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<CardContent
						component='div'
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							height: 200,
						}}>
						<Typography
							variant='h5'
							align='center'
							sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
							Welcome to <br /> TOPPA Member Portal
						</Typography>
						<Grid item sx={{ height: 50 }}>
							<GoogleLogin
								onSuccess={handleSuccess}
								onError={handleFailure}
								type='standard'
								size='large'
								shape='circle'
							/>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
