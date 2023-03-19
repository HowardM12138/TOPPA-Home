import { Grid } from "@mui/material";
import AttendBlock from "./AttendBlock";
import NavBar from "../NavBar";

export default function Attendance() {
  const attendanceprops = [
    {
      title: "General Meeting Attendance",
      TodayEvent: "2.1 General Meeting",
      AttendanceRate: "100%",
      PastDate: "2.28",
      Status: "Presented",
    },
    {
      title: "Project Meeting Attendance",
      TodayEvent: "2.1 Project Meeting",
      AttendanceRate: "100%",
      PastDate: "2.28",
      Status: "Presented",
    },
    {
      title: "Biweekly Bonding Attendance",
      TodayEvent: "2.1 Bonding",
      AttendanceRate: "100%",
      PastDate: "2.28",
      Status: "Presented",
    },
  ];
  const GridContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: 2,
  };

  return (
    <div>
      <NavBar />
      <Grid container sx={GridContainer}>
        {attendanceprops.map((attprops) => {
          return (
            <Grid item xs={3.5}>
              <AttendBlock
                title={attprops.title}
                TodayEvent={attprops.TodayEvent}
                AttendanceRate={attprops.AttendanceRate}
                PastDate={attprops.PastDate}
                Status={attprops.Status}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
