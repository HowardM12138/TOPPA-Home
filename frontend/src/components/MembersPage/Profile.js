/* Component Import */
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* MUI Import */
import { Grid, Typography, IconButton, CardMedia, Card } from "@mui/material";
import { Instagram, LinkedIn } from "@mui/icons-material";
import { backendLink } from "../meta";

export default function Profile() {
	const [info, setInfo] = useState({});
	const params = useParams();

	useEffect(() => {
		console.log("running fetch");
		fetch(backendLink + "/info/" + params.memberName)
			.then((response) => response.json())
			.then((data) => {
				fetch(backendLink + "/image/" + data.name)
					.then((res) => res.text())
					.then((binaryData) => {
						data.pic = binaryData;
						setInfo(data);
					});
			})
			.catch((err) => console.log(err));
	}, []);

	const textStyle = {
		pb: 2,
		px: 2,
	};

	if (info === {}) {
		return <div></div>;
	} else {
		console.log(info);
		return (
			<div>
				<NavBar />
				<Grid
					container
					sx={{
						m: 4,
						p: 2,
						bgcolor: "#F2FFCC",
						width: 1450,
						height: 700,
						borderRadius: 4,
					}}>
					<Grid container direction='column'>
						<Grid
							item
							alignItems='center'
							justifyContent='center'
							sx={{ p: 4 }}>
							<Typography
								variant='h3'
								align='center'
								sx={{
									fontWeight: "bold",
								}}>
								{info.name}
							</Typography>
						</Grid>
						<Grid container direction='row'>
							<Grid item alignItems='flex-start' sx={{ p: 4 }}>
								<Card>
									<CardMedia
										component='img'
										image={`data:image/png;base64,${info.pic}`}
										sx={{
											width: 250,
											height: 350,
										}}></CardMedia>
								</Card>
							</Grid>
							<Grid item alignItems='flex-start' sx={{ p: 4 }}>
								<Typography variant='h4' sx={textStyle}>
									Grade: {info.grade}
								</Typography>
								<Typography variant='h4' sx={textStyle}>
									Major: {info.major}
								</Typography>
								<Typography variant='h4' sx={textStyle}>
									Hometown: {info.hometown}
								</Typography>
								<Typography variant='h4' sx={textStyle}>
									Hobby: {info.hobby}
								</Typography>
								<Typography variant='h4' sx={textStyle}>
									Instagram:
									<IconButton size='large'>
										<Instagram
											onClick={() => {
												window.open(info.ins, "_self");
											}}
										/>
									</IconButton>
								</Typography>
								<Typography variant='h4' sx={textStyle}>
									LinkedIn:
									<IconButton size='large'>
										<LinkedIn
											onClick={() => {
												window.open(info.linkedin, "_self");
											}}
										/>
									</IconButton>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
