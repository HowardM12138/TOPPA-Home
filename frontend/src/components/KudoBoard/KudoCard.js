import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import howard_pic from "../photos/howardmeng.png";
import wilson_pic from "../photos/wilsonhe.png";
import jenny_pic from "../photos/jennywang.png";
import jingfeng_pic from "../photos/jingfengyang.png";
import coco_pic from "../photos/cocoma.png";
import persy_pic from "../photos/persyzhu.png";
import hidy_pic from "../photos/hidychan.png";

import { backendLink } from "../meta";

const CardStyle = {
	my: 1,
	width: "100%",
};
const Wrapper = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

export default function KudoBoard(props) {
	const navigate = useNavigate();
	const name_pic = {
		//在cardmedia中的src中用relative path会报错找不到，只能先把图片导进来
		Howard: howard_pic,
		Wilson: wilson_pic,
		Jenny: jenny_pic,
		Jingfeng: jingfeng_pic,
		Coco: coco_pic,
		Persy: persy_pic,
		Hidy: hidy_pic,
	};

	const DeleteClick = () => {
		console.log(props.id);
		fetch(backendLink + "/KudoBoard/delete", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "DELETE",
			body: JSON.stringify({
				id: props.id,
			}),
		})
			.then((result) => {
				console.log("deleted!");
				//window.location.reload(); //刷新当前页面的代码
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const thumbup = () => {
		fetch(backendLink + "/KudoBoard/like", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "PUT",
			body: JSON.stringify({
				id: props.id,
			}),
		})
			.then((result) => {
				//window.location.reload();
				console.log("updated!");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Card sx={CardStyle}>
				<CardMedia component='img' height='400' image={name_pic[props.name]} />
				<CardContent>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{ fontWeight: "bold" }}>
						To the Greatest {props.name}!
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{props.content}
					</Typography>
				</CardContent>
				<Grid container sx={Wrapper}>
					<Grid xs={2}>
						<IconButton aria-label='add to favorites' sx={{ ml: 2 }}>
							<FavoriteIcon onClick={thumbup} />
						</IconButton>
					</Grid>
					<Grid xs={2}>
						<Typography variant='body1' sx={{ ml: 0.5, fontWeight: "bold" }}>
							{props.thumbup}
						</Typography>
					</Grid>
					<Grid xs={8}>
						<Button
							variant='elevated'
							sx={{
								bgcolor: "white",
								fontWeight: "bold",
								ml: 16,
								borderRadius: 3,
							}}
							onClick={DeleteClick}>
							Delete
						</Button>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
