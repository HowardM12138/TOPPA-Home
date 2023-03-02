/* React Import */
// import React, { useState, useEffect } from "react";

/* MUI Import */
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ErrorIcon from "@mui/icons-material/Error";

export default function DashPad(props) {
	const selectIcon = (name) => {
		switch (name) {
			case "schedule":
				return <ScheduleIcon sx={{ fontSize: 80 }}></ScheduleIcon>;
			default:
				return <ErrorIcon sx={{ fontSize: 80 }}></ErrorIcon>;
		}
	};
	return (
		<div>
			<Card variant='outlined' sx={{ maxWidth: 200, minHeight: 200 }}>
				<CardActionArea>
					<CardContent
						component='div'
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-around",
							height: 200,
						}}>
						<Typography variant='h5'>{props.name}</Typography>
						{selectIcon(props.icon)}
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}
