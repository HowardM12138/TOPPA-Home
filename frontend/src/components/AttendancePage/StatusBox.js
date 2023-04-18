import { Grid, Typography } from "@mui/material";

const GridContainer1 = {
  bgcolor: "#1F9F4B",
  borderRadius: 2,
  padding: 1,
  my: 1,
  height: 50,
};
const GridContainer2 = {
  bgcolor: "#8b0000",
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

export default function StatusBox(Props) {
  return (
    <div>
      {Props.status && (
        <Grid container sx={GridContainer1}>
          <Grid item xs={8}>
            <Typography sx={Typo1}>{Props.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={Typo2}>Presented</Typography>
          </Grid>
        </Grid>
      )}
      {!Props.status && (
        <Grid container sx={GridContainer2}>
          <Grid item xs={8}>
            <Typography sx={Typo1}>{Props.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={Typo2}>Absent</Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
