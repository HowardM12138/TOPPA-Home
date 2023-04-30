/* Package Import */
import { useState, useEffect } from "react";

/* Component Import */
import NavBar from "../components/NavBar";

/* MUI Import */
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import Input from "@mui/joy/Input";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

/* backend */
// const express = require("express");
// const mongoose = require("mongoose");
// const Reimbursement_model = require("../../../../backend/models/reimbursement");

// require("dotenv").config();
// const app = express();

// app.use(express.json());

export default function Info() {
  const [name, setName] = useState(null);
  const [grade, setGrade] = useState(null);
  const [major, setMajor] = useState(null);
  const [hometown, setHometown] = useState(null);
  const [hobby, setHobby] = useState(null);
  const [ins, setIns] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const onChangeName = (event) => {
    const newInput = event.target.value;
    setName(newInput);
  };
  const onChangeGrade = (event) => {
    const newInput = event.target.value;
    setGrade(newInput);
  };
  const onChangeMajor = (event) => {
    const newInput = event.target.value;
    setMajor(newInput);
  };
  const onChangeHometown = (event) => {
    const newInput = event.target.value;
    setHometown(newInput);
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

  const Click = () => {
    fetch("http://localhost:4000/submitinfo", {
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      method: "POST",
      body: JSON.stringify({
        name: name,
        pic: "./photos/" + name.toLowerCase().replace(" ", "") + ".png",
        grade: grade,
        major: major,
        hometown: hometown,
        hobby: hobby,
        ins: ins,
        linkedin: linkedin,
      }),
    }).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };

  return (
    <div>
      <NavBar />
      <form action="/submitinfo" method="POST">
        <Card
          sx={{
            height: 1300,
          }}
        >
          <CardContent
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                p: 8,
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Information Collection Form
              </Typography>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowSpacing={4}
            >
              <Grid
                item
                md={4}
                sx={{
                  width: 600,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Name</Typography>
                <Input
                  placeholder="Enter your first and last name"
                  size="md"
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
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Grade</Typography>
                <Input
                  placeholder="Enter your grade"
                  size="md"
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
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Major</Typography>
                <Input
                  placeholder="Enter your major(s)"
                  size="md"
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
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Hometown</Typography>
                <Input
                  placeholder="Enter your hometown"
                  size="md"
                  sx={{
                    p: 2,
                    bgcolor: "#CFF1D4",
                    boxShadow: "0px 3px 6px #00000029",
                  }}
                  onChange={onChangeHometown}
                />
              </Grid>

              <Grid
                item
                md={4}
                sx={{
                  width: 600,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Hobby</Typography>
                <Input
                  placeholder="Enter your hobby(s)"
                  size="md"
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
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Ins</Typography>
                <Input
                  placeholder="Enter your instagram link"
                  size="md"
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
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>LinkedIn</Typography>
                <Input
                  placeholder="Enter your linkedin link"
                  size="md"
                  sx={{
                    p: 2,
                    bgcolor: "#CFF1D4",
                    boxShadow: "0px 3px 6px #00000029",
                  }}
                  onChange={onChangeLinkedin}
                />
              </Grid>
            </Grid>

            <Grid item rowSpacing={10}>
              <Button
                variant="elevated"
                sx={{
                  bgcolor: "#2F9E41",
                  fontWeight: "bold",
                  p: 2,
                  mt: 5,
                  boxShadow: "0px 3px 6px #00000029",
                }}
                onClick={Click}
              >
                Submit
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
