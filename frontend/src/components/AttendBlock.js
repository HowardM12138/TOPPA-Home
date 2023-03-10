import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export default function AttendBlock(props) {
  return (
    <container>
      <Typography variant="h2">{props.title}</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">{props.TodayEvent}</Typography>
          <input placeholder="Attendance Word" />
          <Button variant="contained">Submit</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">{props.AttendanceRate}</Typography>
          <Box>
            <Typography>{props.PastDate}</Typography>
            <Typography>{props.Status}</Typography>
          </Box>
        </CardContent>
      </Card>
    </container>
  );
}
