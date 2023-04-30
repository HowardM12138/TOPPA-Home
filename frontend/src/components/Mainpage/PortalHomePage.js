/* Package Import */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* Component Import */
import DashPad from "./DashPad";
import { validateUser } from "../UserSession";
import { getUser } from "../UserSession";
import NavBar from "../NavBar";

/* MUI Import */
import { Grid, Typography } from "@mui/material";

export default function PortalHomePage() {
  const navigate = useNavigate();
  const [Props, setProps] = useState([]);

  useEffect(() => {
    if (!validateUser()) {
      console.log("user not validated");
      navigate("/sign-in");
      return;
    } else {
      //还没验证就不能fetch，因为没验证就没有getUser().name
      fetch("http://localhost:5002/getInfo", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: getUser().name,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          setProps(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const redirects = [
    {
      name: "TOPPA Schedule",
      icon: "schedule",
    },
    {
      name: "Reimbursement",
      icon: "payments",
    },
    {
      name: "Bonding Group Board",
      icon: "peopleAlt",
    },
    {
      name: "Kudo Board",
      icon: "celebration",
    },
    {
      name: "Attendance",
      icon: "factCheck",
    },
  ];

  return (
    <div>
      <NavBar />
      <Grid container sx={{ mt: 10 }}>
        <Grid
          container
          xs={5}
          sx={{ bgcolor: "#2F9E41", borderRadius: 4, ml: 7, mr: 2 }}
        >
          <Grid item xs={12} sx={{ textAlign: "center", mt: 10 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", fontStyle: "italic" }}
            >
              Welcome Home, {Props && Props.name}!
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontStyle: "italic" }}
            >
              Exective Role: {Props && Props.ExecRole}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontStyle: "italic" }}
            >
              Project Team: {Props && Props.ProjTeam}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontStyle: "italic" }}
            >
              Toppa Age: {Props && Props.ToppaAge}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          rowSpacing={15}
          justifyContent="center"
          alignItems="center"
          xs={6}
        >
          {redirects.map((redir) => {
            return (
              <Grid item container md={4} justifyContent="center">
                <DashPad name={redir.name} icon={redir.icon} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
