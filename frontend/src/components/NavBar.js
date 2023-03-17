/* Package Import */
import { useNavigate } from "react-router-dom";

/* Component Import */
import { clearUser } from "./UserSession";

/* MUI Import */
import { Grid, AppBar, Typography, Button } from "@mui/material";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ height: 50, bgcolor: "#1F9F4B", position: "sticky" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: 1 }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ width: 0.95, position: "absolute" }}
        >
          <Typography variant="h6">TOPPA Member Portal</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          sx={{ width: 0.95, position: "absolute" }}
        >
          <Button
            variant="contained"
            onClick={() => {
              clearUser();
              navigate("/sign-in");
            }}
            sx={{ bgcolor: "#1F9F4B" }}
          >
            Log Out
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}
