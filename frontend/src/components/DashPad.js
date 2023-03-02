/* React Import */
// import React, { useState, useEffect } from "react";

/* MUI Import */
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Grid,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ErrorIcon from "@mui/icons-material/Error";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export default function DashPad(props) {
	const selectIcon = (name) => {
		switch (name) {
			case "schedule":
				return <ScheduleIcon sx={{ fontSize: 80 }}></ScheduleIcon>;
			case "payments":
				return <PaymentsIcon sx={{ fontSize: 80 }}></PaymentsIcon>;
			case "peopleAlt":
				return <PeopleAltIcon sx={{ fontSize: 80 }}></PeopleAltIcon>;
			case "celebration":
				return <CelebrationIcon sx={{ fontSize: 80 }}></CelebrationIcon>;
			case "factCheck":
				return <FactCheckIcon sx={{ fontSize: 80 }}></FactCheckIcon>;
			default:
				return <ErrorIcon sx={{ fontSize: 80 }}></ErrorIcon>;
		}
	};
	return (
		<div>
			<Card variant='outlined' sx={{ width: 200, height: 200 }}>
				<CardActionArea>
					<CardContent
						component='div'
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							height: 200,
							pt: 0,
							pb: 0,
						}}>
						<Typography
							variant='h5'
							align='center'
							sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
							{props.name}
						</Typography>
						<Grid
							container
							justifyContent='center'
							alignItems='center'
							sx={{ height: 120 }}>
							<Grid item>{selectIcon(props.icon)}</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}
