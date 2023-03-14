import { Typography, Button, Grid, OutlinedInput } from "@mui/material";
import StatusBox from "./StatusBox";

export default function AttendBlock(props) {
  const NumOfBox = [1, 2, 3, 4];

  const FirstTitleBlock = {
    mb: 2,
    padding: 2,
  };
  const SecondGridContainer = {
    bgcolor: "#9BF4C9",
    mx: 1,
    mb: 2,
    borderRadius: 3,
    padding: 2,
  };
  const ThirdGridContainer = {
    bgcolor: "#9BF4C9",
    mx: 1,
    mb: 2,
    borderRadius: 3,
    padding: 2,
  };
  const Title = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "italic",
  };
  const EventTitle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  };
  const Wrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    my: 1,
  };
  const Input = {
    maxWidth: 250,
    maxHeight: 40,
    borderRadius: 3,
    bgcolor: "white",
    boxShadow: 3,
  };
  const Submit = {
    borderRadius: 3,
    bgcolor: "#1F9F4B",
    boxShadow: 3,
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={FirstTitleBlock}>
        <Typography variant="h4" sx={Title}>
          {props.title}
        </Typography>
      </Grid>

      <Grid container item xs={12} sx={SecondGridContainer}>
        <Grid item xs={12} sx={Wrapper}>
          <Typography variant="h6" sx={EventTitle}>
            {props.TodayEvent}
          </Typography>
        </Grid>
        <Grid item xs={8} sx={Wrapper}>
          <OutlinedInput placeholder="Attendance Word" sx={Input} />
        </Grid>
        <Grid item xs={4} sx={Wrapper}>
          <Button variant="contained" sx={Submit}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Grid container item xs={12} sx={ThirdGridContainer}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={EventTitle}>
            {props.AttendanceRate}
          </Typography>
        </Grid>
        <Grid item container>
          {NumOfBox.map((num) => {
            return (
              <Grid item xs={12}>
                <StatusBox />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
