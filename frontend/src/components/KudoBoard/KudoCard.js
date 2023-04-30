import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Howard from "../photos/howardmeng.png";
import { Grid, Input } from "@mui/material";

export default function KudoBoard(props) {
  const CardStyle = {
    my: 1,
    width: "100%",
  };
  const [heart, setheart] = useState(0);
  const thumbup = () => {
    setheart(heart + 1);
  };
  const [input, setInput] = useState(null);
  const onChange = (event) => {
    const newInput = event.target.value;
    setInput(newInput);
  };
  const Wrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <Card sx={CardStyle}>
        <CardMedia component="img" height="400" src={Howard} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Howard, Howard, great and wise,
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A man of truth, who never lies,
          </Typography>
          {props.id % 2 == 1 && (
            <Typography variant="body2" color="text.secondary">
              In all his ways, he walks with grace,
            </Typography>
          )}
          {props.id % 2 == 1 && (
            <Typography variant="body2" color="text.secondary">
              A shining example to the human race,
            </Typography>
          )}
          {props.id % 2 == 1 && (
            <Typography variant="body2" color="text.secondary">
              With words that heal, and actions just,
            </Typography>
          )}
          {props.id % 2 == 1 && (
            <Typography variant="body2" color="text.secondary">
              He guides us forward, in love and trust.
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {input}
          </Typography>
        </CardContent>
        <Grid container sx={Wrapper}>
          <Grid xs={1}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={thumbup} />
            </IconButton>
          </Grid>
          <Grid xs={1}>
            <Typography variant="body1" sx={{ ml: 0.5, fontWeight: "bold" }}>
              {heart}
            </Typography>
          </Grid>
          <Grid xs={2}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid xs={8} sx={{ justifyContent: "flex-end" }}>
            <Input
              onChange={onChange}
              placeholder="Any Comments"
              sx={{ ml: 12 }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
