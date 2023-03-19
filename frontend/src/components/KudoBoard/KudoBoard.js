import { Grid } from "@mui/material";
import NavBar from "../NavBar";
import KudoCard from "./KudoCard";

export default function KudoBoard() {
  const list = [1, 2, 3, 4, 5, 6];
  const GridContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: 2,
  };

  return (
    <div>
      <NavBar />
      <Grid container sx={GridContainerStyle}>
        {list.map((index) => {
          return (
            <Grid item xs={4} sx={GridContainerStyle}>
              <KudoCard id={index} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
