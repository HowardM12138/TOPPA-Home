import { Typography, Grid, Box } from "@mui/material";
import StatusBox from "./StatusBox";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";

export default function BondingBlock(props) {
  const NumOfBox = [1, 2, 3, 4];

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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
  const UpPic = {
    fontWeight: "bold",
    fontSize: 20,
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={FirstTitleBlock}>
        <Typography variant="h4" sx={Title}>
          {props.title}
        </Typography>
      </Grid>

      <Grid container item xs={12} sx={SecondGridContainer}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={EventTitle}>
            {props.TodayEvent}
          </Typography>
        </Grid>

        <Grid container item xs={12} sx={Wrapper}>
          <Grid item xs={10}>
            <Typography sx={UpPic}>Upload Pictures!</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ color: "#2F9E41", p: 2 }}
            >
              <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: "none" }}
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
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
