import { Grid, Button } from "@mui/material";
import NavBar from "../NavBar";
import KudoCard from "./KudoCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendLink } from "../meta";

const GridContainerStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	m: 1,
};

export default function KudoBoard() {
	const navigate = useNavigate();
	const [Params, setParams] = useState([]);
	const [images, setImages] = useState({});

	const refresh = () => {
		fetch(backendLink + "/KudoBoard/refresh")
			.then(
				(response) => response.json() //then function这么写会直接默认return后面的值
				//如果在arrow function后加了大括号的话，就得写上return statement了
				//一定要把response.json()，不然出的就是一个另一个object了
			)
			.then((kudos) => {
				setParams(kudos);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const imageFetch = async () => {
		if (Object.keys(images).length !== 0) return;
		const imgs = {};
		for (const kudo of Params) {
			await fetch(backendLink + "/image/" + kudo.name)
				.then((res) => res.text())
				.then((binaryData) => {
					imgs[kudo.name] = binaryData;
				})
				.catch((err) => console.log(err));
		}
		setImages(imgs);
	};

	useEffect(() => {
		imageFetch();
	}, [Params]);

	useEffect(() => {
		setTimeout(() => {
			refresh();
		}, 500);
	}, [Params]); //隔0.5秒从后端fetch一遍数据，不知道会不会伤害server？
	//每次fetch完Params这个State就会被改变，useeffect就再会被call

	//去找param是个啥是一个async指令，需要时间，所以最后要等Params有了之后才能去map循环，{Params && Params.map}
	return (
		<div>
			<NavBar />
			<Grid item xs={3} sx={GridContainerStyle}>
				<Button
					variant='elevated'
					sx={{
						bgcolor: "#2F9E41",
						fontWeight: "bold",
						mt: 2,
						borderRadius: 3,
					}}
					onClick={() => navigate("/KudoBoard/KudoSubmit")}>
					Click Here to Add New!!
				</Button>
			</Grid>
			<Grid container sx={GridContainerStyle}>
				{Params &&
					Params.map((param) => {
						return (
							<Grid item xs={3} sx={GridContainerStyle}>
								<KudoCard
									name={param.name}
									content={param.kudocontent}
									id={param._id}
									thumbup={param.thumbup}
									image={images[param.name]}
								/>
							</Grid>
						);
					})}
			</Grid>
		</div>
	);
}
