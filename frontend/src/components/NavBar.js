/* Package Import */
import { useNavigate } from "react-router-dom";

/* Component Import */
import { clearUser } from "./UserSession";

/* MUI Import */
import { Grid, AppBar, Typography, Button } from "@mui/material";
import Home from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <AppBar sx={{ height: 50, bgcolor: "#2F9E41" }}>
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
                    sx={{ width: 0.95, position: "absolute" }}
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
                        sx={{ bgcolor: "#2F9E41" }}
                    >
                        Log Out
                    </Button>
                </Grid>
            </Grid>
        </AppBar>
    );
}
