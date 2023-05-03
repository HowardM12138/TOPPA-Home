/* Package Import */
import { useState, useEffect } from "react";

/* Component Import */
import NavBar from "./NavBar";

/* MUI Import */
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";

import { backendLink } from "./meta";
import { useNavigate } from "react-router-dom";
import { getUser } from "./UserSession";

export default function SignUp() {
	const navigate = useNavigate();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [legalName, setLegalName] = useState();
	const [execRole, setExecRole] = useState();
	const [projTeam, setProjTeam] = useState();
	const [toppaAge, setToppaAge] = useState();
	const [grade, setGrade] = useState();
	const [major, setMajor] = useState();
	const [hometown, setHomeTown] = useState();
	const [hobby, setHobby] = useState();
	const [ins, setIns] = useState();
	const [linkedin, setLinkedin] = useState();
	const [password, setPassword] = useState();

	const onChangeName = (event) => {
		const newInput = event.target.value;
		setName(newInput);
	};

	const onChangeExecRole = (event) => {
		const newInput = event.target.value;
		setExecRole(newInput);
	};

	const onChangeProjTeam = (event) => {
		const newInput = event.target.value;
		setProjTeam(newInput);
	};

	const onChangeToppaAge = (event) => {
		const newInput = event.target.value;
		setToppaAge(newInput);
	};

	const onChangeGrade = (event) => {
		const newInput = event.target.value;
		setGrade(newInput);
	};

	const onChangeMajor = (event) => {
		const newInput = event.target.value;
		setMajor(newInput);
	};

	const onChangeHomeTown = (event) => {
		const newInput = event.target.value;
		setHomeTown(newInput);
	};

	const onChangeHobby = (event) => {
		const newInput = event.target.value;
		setHobby(newInput);
	};

	const onChangeIns = (event) => {
		const newInput = event.target.value;
		setIns(newInput);
	};

	const onChangeLinkedin = (event) => {
		const newInput = event.target.value;
		setLinkedin(newInput);
	};

	const onChangePassword = (event) => {
		const newInput = event.target.value;
		setPassword(newInput);
	};

	const handleSubmit = () => {
		fetch(
			backendLink +
				"/sign-up?" +
				new URLSearchParams({
					password: password,
				}),
			{
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					name: name,
					legalName: legalName,
					email: email,
					execRole: execRole,
					projTeam: projTeam,
					toppaAge: toppaAge,
					grade: grade,
					major: major,
					hometown: hometown,
					hobby: hobby,
					ins: ins,
					linkedin: linkedin,
				}),
			}
		).then((result) => {
			console.log(result);
			navigate("/");
		});
	};

	useEffect(() => {
		const userBaiscInfo = JSON.parse(sessionStorage.getItem("user"));
		if (!userBaiscInfo) {
			console.log("user not validated");
			navigate("/sign-in");
		} else {
			getUser().then((result) => {
				if (result) {
					navigate("/");
				} else {
					setEmail(userBaiscInfo.email);
					setLegalName(userBaiscInfo.name);
				}
			});
		}
	}, []);

	return (
		<div>
			<NavBar />
			<Card>
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
						sx={{
							p: 8,
						}}>
						<Typography variant='h5' align='center' sx={{ fontWeight: "bold" }}>
							Sign-Up Form
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
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Name</Typography>
							<Input
								placeholder='Enter your name'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeName}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Role</Typography>
							<Input
								placeholder='Enter your role in TOPPA'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeExecRole}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Project Team</Typography>
							<Input
								placeholder='Enter your project name'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeProjTeam}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Toppa Age</Typography>
							<Input
								placeholder='Enter how many semesters you were in TOPPA'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeToppaAge}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Grade</Typography>
							<Input
								placeholder='Enter your grade'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeGrade}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Major</Typography>
							<Input
								placeholder='Enter your major'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeMajor}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Home Town</Typography>
							<Input
								placeholder='Enter your home town'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeHomeTown}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Hobby</Typography>
							<Input
								placeholder='Enter your hobby'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeHobby}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>
								Instagram (URL)
							</Typography>
							<Input
								placeholder='Enter your instagram (an URL)'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeIns}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>
								LinkedIn (URL)
							</Typography>
							<Input
								placeholder='Enter your LinkedIn (an URL)'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangeLinkedin}
							/>
						</Grid>

						<Grid
							item
							md={4}
							sx={{
								width: 600,
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography sx={{ fontWeight: "bold" }}>Password</Typography>
							<Input
								placeholder='Enter the password for sign up'
								size='md'
								sx={{
									p: 2,
									bgcolor: "#CFF1D4",
									boxShadow: "0px 3px 6px #00000029",
								}}
								onChange={onChangePassword}
							/>
						</Grid>
					</Grid>

					<Grid item rowSpacing={10} sx={{ marginTop: 3 }}>
						<Button
							variant='elevated'
							sx={{
								bgcolor: "#2F9E41",
								fontWeight: "bold",
								p: 2,
								boxShadow: "0px 3px 6px #00000029",
							}}
							onClick={handleSubmit}>
							Submit
						</Button>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}
