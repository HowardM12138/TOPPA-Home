/* Package Import */
import { Link, useNavigate } from "react-router-dom";

/* Component Import */
import { clearUser } from "./UserSession";

/* MUI Import */
import { Grid, AppBar, Typography, Button } from "@mui/material";
import Home from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ height: 50, bgcolor: "#2F9E41", position: "sticky" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: 1 }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          xs={1}
          sx={{ width: 0.95 }}
        >
          <IconButton
            onClick={() => {
              navigate("/");
            }}
          >
            <Home />
          </IconButton>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          xs={2}
          sx={{ width: 0.95, mr: 2 }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            TOPPA Member Portal
          </Typography>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="right"
          xs={1.5}
          sx={{ width: 0.95 }}
        >
          <Button
            onClick={() => {
              navigate("/ToppaSchedule");
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Toppa Schedule
            </Typography>
          </Button>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="right"
          xs={1.5}
          sx={{ width: 0.95 }}
        >
          <Button
            onClick={() => {
              navigate("/Reimbursement");
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Reimbursement
            </Typography>
          </Button>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="right"
          xs={1.5}
          sx={{ width: 0.95 }}
        >
          <Button
            onClick={() => {
              navigate("/BondingGroupBoard");
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Bonding Group
            </Typography>
          </Button>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="right"
          xs={1.2}
          sx={{ width: 0.95 }}
        >
          <Button
            onClick={() => {
              navigate("/KudoBoard");
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              KudoBoard
            </Typography>
          </Button>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="right"
          xs={1.2}
          sx={{ width: 0.95 }}
        >
          <Button
            onClick={() => {
              navigate("/Attendance");
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Attendance
            </Typography>
          </Button>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          xs={1.5}
          sx={{ width: 0.95 }}
        >
          <Button
            variant="contained"
            onClick={() => {
              clearUser();
              navigate("/sign-in");
            }}
            sx={{ bgcolor: "#2F9E41" }}
          >
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Log Out
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}
