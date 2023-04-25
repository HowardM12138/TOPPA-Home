import { Grid } from "@mui/material";
import Block from "./Block";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";

const GridContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: 2,
};

export default function Attendance() {
  const [Props, setProps] = useState([]);

  const refresh = () => {
    fetch("http://localhost:5002/Attendance/refresh")
      .then((response) => response.json())
      .then((response) => {
        setProps(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      refresh();
    }, 500);
  }, [Props]);

  return (
    <div>
      <NavBar />
      <Grid container sx={GridContainer}>
        {Props &&
          Props.slice(0, 3).map((Prop) => {
            return (
              <Grid item xs={3.5}>
                <Block
                  title={Prop.activity_title}
                  TodayEvent={Prop.activity_name}
                  PastDate={Prop.activity_date}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
