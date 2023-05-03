/* Package Import */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* Component Import */
import NavBar from "../NavBar";

/* MUI Import */
import { Grid, Typography, Avatar, Button } from "@mui/material";
import { backendLink } from "../meta";

export default function Members() {
	const navigate = useNavigate();
	const [member, setMember] = useState([]);

	useEffect(() => {
		fetch(backendLink + "/all-info")
			.then((response) => response.json())
			.then((data) => {
				for (const m of data) {
					fetch(backendLink + "/image/" + m.name)
						.then((res) => res.text())
						.then((binaryData) => {
							m.pic = binaryData;
							setMember(data);
						})
						.catch((err) => console.log(err));
				}
			});
	}, []);

	return (
		<div>
			<NavBar />
			<Grid container>
				<Grid container sx={{ pl: 20, pt: 4 }}>
					<Typography variant='h4'>Members</Typography>
					{/* <Button
						variant='elevated'
						sx={{
							bgcolor: "#2F9E41",
							fontWeight: "bold",
							boxShadow: "0px 3px 6px #00000029",
							ml: 2,
						}}
						onClick={() => {
							navigate("/submitinfo");
						}}>
						Submit Information
					</Button> */}
				</Grid>
				{member.map((member) => {
					return (
						<Grid
							container
							sx={{
								bgcolor: "transparent",
								width: 300,
								height: 300,
								px: 20,
							}}>
							<Grid
								container
								component='div'
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Grid container>
									<Grid item justifyContent='flex-start'>
										<Avatar
											alt={member.name}
											src={`data:image/png;base64,${member.pic}`}
											sx={{
												width: 225,
												height: 225,
											}}
											onClick={() => {
												navigate("/Members/" + member.name);
											}}
											variant='rounded'></Avatar>
										<Typography
											variant='h5'
											align='center'
											sx={{ fontWeight: "bold" }}>
											{member.name}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}
