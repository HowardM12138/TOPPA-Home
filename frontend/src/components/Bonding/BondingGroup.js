/* Component Import */
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import BondingCard from "./BondingCard.js";

/* MUI Import */
import { Grid, Box } from "@mui/material";
import { backendLink } from "../meta";

export default function BondingGroup() {
	const groups = [
		{
			bondingGroup: [
				{
					isLeader: true,
					name: "Coco Ma",
					pic: "",
				},
				{
					isLeader: false,
					name: "Hidy Chan",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
			],
		},
		{
			bondingGroup: [
				{
					isLeader: true,
					name: "Howard Meng",
					pic: "",
				},
				{
					isLeader: false,
					name: "Jenny Wang",
					pic: "",
				},
				{
					isLeader: false,
					name: "Jingfeng Yang",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
			],
		},
		{
			bondingGroup: [
				{
					isLeader: true,
					name: "Howard Meng",
					pic: "",
				},
				{
					isLeader: false,
					name: "Jenny Wang",
					pic: "",
				},
				{
					isLeader: false,
					name: "Jingfeng Yang",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
			],
		},
		{
			bondingGroup: [
				{
					isLeader: true,
					name: "Coco Ma",
					pic: "",
				},
				{
					isLeader: false,
					name: "Hidy Chan",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
			],
		},
		{
			bondingGroup: [
				{
					isLeader: true,
					name: "Coco Ma",
					pic: "",
				},
				{
					isLeader: false,
					name: "Hidy Chan",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
			],
		},
		{
			bondingGroup: [
				{
					isLeader: true,
					name: "Coco Ma",
					pic: "",
				},
				{
					isLeader: false,
					name: "Hidy Chan",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Persy Zhu",
					pic: "",
				},
				{
					isLeader: false,
					name: "Wilson He",
					pic: "",
				},
			],
		},
	];

	const [images, setImages] = useState({});

	const imageFetch = async () => {
		const imgs = {};
		for (const group of groups) {
			for (const member of group.bondingGroup) {
				if (!imgs[member.name]) {
					await fetch(backendLink + "/image/" + member.name)
						.then((res) => res.text())
						.then((binaryData) => {
							imgs[member.name] = binaryData;
						})
						.catch((err) => console.log(err));
				}
			}
		}
		setImages(imgs);
	};

	useEffect(() => {
		imageFetch();
	}, []);

	const renderCards = () => {
		if (Object.keys(images).length !== 0) {
			console.log(Object.keys(images).length);
			return groups.map((group) => {
				return (
					<Grid item md={4} sx={{ p: 2 }}>
						<BondingCard
							group={group.bondingGroup}
							images={images}></BondingCard>
					</Grid>
				);
			});
		}
	};

	return (
		<div style={{ width: "100%" }}>
			<NavBar />
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
				}}>
				<Grid container sx={{ mt: 3, mr: 4, ml: 2.5, mb: 2 }}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
						sx={{ p: 1 }}>
						{renderCards()}
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
