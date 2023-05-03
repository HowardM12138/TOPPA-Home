/* Package Import */
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/* Component Import */
import NavBar from "../NavBar";

/* MUI Import */
import {
	Card,
	CardContent,
	Typography,
	Grid,
	OutlinedInput,
} from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import { borderRadius } from "@mui/system";

import { backendLink } from "../meta";

export default function KudoSubmit() {
	const navigate = useNavigate();
	const Click = () => {
		console.log(input1);
		//几个错误：一定是fetch给后端的网址，port不一样。一定是http不是http's'，不然会出现SSL_PROTOCAL_ERROR
		fetch(backendLink + "/KudoBoard/KudoSubmit/upload", {
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			//Header很重要，不然后端req.body会undefined显示为{}
			method: "POST",
			body: JSON.stringify({
				person: input1,
				kudocontent: input2,
			}),
			//javascript object变成JSON，就是把javascript object变成一个text上多了引号，JSON是req规定的传输数据的格式
		}).then((result) => {
			console.log(InputRef1);
			navigate("/KudoBoard");
			//只有OutLinedInput能做到时刻保持着InputRef的值，Input element最后InputRef的值为null
		});
	};

	const InputRef1 = useRef(null);
	const [input1, setInput1] = useState(null);
	const onChange1 = (event) => {
		const newInput1 = event.target.value;
		setInput1(newInput1);
	};

	const InputRef2 = useRef(null);
	const [input2, setInput2] = useState(null);
	const onChange2 = (event) => {
		const newInput2 = event.target.value;
		setInput2(newInput2);
	};

	return (
		<div>
			<NavBar />
			<Card variant='outlined'>
				<CardContent
					component='div'
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Grid
						container
						justifyContent='center'
						alignItems='center'
						sx={{ p: 4 }}>
						<Typography variant='h5' align='center' sx={{ fontWeight: "bold" }}>
							Kudo Board!
						</Typography>
					</Grid>

					<Grid
						container
						direction='column'
						justifyContent='center'
						alignItems='center'
						rowSpacing={4}>
						<Grid
							item
							md={4}
							sx={{
								width: 600,
							}}>
							<Typography sx={{ fontWeight: "bold", py: 1 }}>
								To Whom?
							</Typography>
							<OutlinedInput
								placeholder='Enter...'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									borderRadius: 3,
									height: 70,
									width: 600,
								}}
								onChange={onChange1}
								inputRef={InputRef1}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
							}}>
							<Typography sx={{ fontWeight: "bold", py: 1 }}>
								What You Want to Say to This Person?
							</Typography>
							<OutlinedInput
								placeholder='Enter...'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									borderRadius: 3,
									height: 70,
									width: 600,
								}}
								onChange={onChange2}
								inputRef={InputRef2}
							/>
						</Grid>
					</Grid>

					<Grid item rowSpacing={10}>
						<Button
							variant='elevated'
							sx={{
								bgcolor: "#2F9E41",
								fontWeight: "bold",
								p: 2,
								mt: 3,
								borderRadius: 3,
							}}
							onClick={Click}>
							Submit
						</Button>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}
