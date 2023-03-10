import { Grid } from "@mui/material";
import AttendBlock from "./AttendBlock";

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
      title: "Biweekly Bonding Attendance",
      TodayEvent: "2.1 Bonding",
      AttendanceRate: "100%",
      PastDate: "2.28",
      Status: "Presented",
    },
  ];
  return (
    <Grid container>
      {attendanceprops.map((attprops) => {
        return (
          <Grid item>
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
  );
}
