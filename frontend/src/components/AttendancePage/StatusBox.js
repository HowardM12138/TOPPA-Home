import { Grid, Typography } from "@mui/material";

export default function StatusBox() {
  const GridContainer = {
    bgcolor: "#1F9F4B",
    borderRadius: 2,
    padding: 1,
    my: 1,
    height: 50,
  };
  const Typo1 = {
    fontWeight: "bold",
    m: 1,
  };
  const Typo2 = {
    fontWeight: "bold",
    textAlign: "right",
    m: 1,
  };
  return (
    <Grid container sx={GridContainer}>
      <Grid item xs={6}>
        <Typography sx={Typo1}>2.28</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography sx={Typo2}>Presented</Typography>
      </Grid>
    </Grid>
  );
}
