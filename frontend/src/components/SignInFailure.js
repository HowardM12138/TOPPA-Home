import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function SignInFailure() {
  const navigate = useNavigate();
  const [Seconds, setSeconds] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      navigate("/sign-in");
    }, 10000);
    setTimeout(() => {
      setSeconds(Seconds - 1);
    }, 1000);
  });
  //两个计时器，一个倒数多久跳转到sign-in page，一个会把一秒一秒显示出来
  //这两个不是async，可以并排放一起执行

  const title = {
    fontWeight: "bold",
  };
  const Wrapper = {
    display: "flex",
    alignText: "center",
    justifyContent: "center",
    mt: 10,
  };

  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} sx={Wrapper}>
          <Typography variant="h4" sx={title}>
            Sorry, Your Email Is Not a Valid Toppa Member Email
          </Typography>
        </Grid>
        <Grid item xs={12} sx={Wrapper}>
          <Typography variant="h5" sx={title}>
            If You are a Toppa Member, Please Use Your Registered Berkely Email
            to Login
          </Typography>
        </Grid>
        <Grid item xs={12} sx={Wrapper}>
          <Typography variant="h5" sx={{ color: "blue", fontWeight: "bold" }}>
            Automatically Redirect to SignIn Page in {Seconds} Seconds
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
