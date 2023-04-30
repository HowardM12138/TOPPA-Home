/* Package Import */
import { useNavigate } from "react-router-dom";

/* Component Import */
import NavBar from "./NavBar";

/* MUI Import */
import { Grid, Typography, Avatar, Button } from "@mui/material";

export default function Members() {
  const navigate = useNavigate();
  const members = [
    {
      name: "Howard Meng",
      pic: "./photos/howardmeng.png",
    },
    {
      name: "Coco Ma",
      pic: "./photos/cocoma.png",
    },
    {
      name: "Hidy Chan",
      pic: "./photos/hidychan.png",
    },
    {
      name: "Persy Zhu",
      pic: "./photos/persyzhu.png",
    },
    {
      name: "Wilson He",
      pic: "./photos/wilsonhe.png",
    },
    {
      name: "Jingfeng Yang",
      pic: "./photos/jingfengyang.png",
    },
    {
      name: "Jenny Wang",
      pic: "./photos/jennywang.png",
    },
    {
      name: "Bonnie Wang",
      pic: "./photos/bonniewang.png",
    },
    {
      name: "Michael Yip",
      pic: "./photos/michaelyip.png",
    },
    {
      name: "Jack Wang",
      pic: "./photos/jackwang.png",
    },
    {
      name: "Edison Chen",
      pic: "./photos/edisonchen.png",
    },
    {
      name: "Dalton Meng",
      pic: "./photos/daltonmeng.png",
    },
    {
      name: "April Yang",
      pic: "./photos/aprilyang.png",
    },
    {
      name: "Charles Xu",
      pic: "./photos/charlesxu.png",
    },
    {
      name: "John Wang",
      pic: "./photos/johnwang.png",
    },
    {
      name: "Aidan Zhou",
      pic: "./photos/aidanzhou.png",
    },
    {
      name: "Jacky Kwok",
      pic: "./photos/jackykwok.png",
    },
    {
      name: "Michael Tao",
      pic: "./photos/michaeltao.png",
    },
    {
      name: "Carissa Tang",
      pic: "./photos/carissatang.png",
    },
    {
      name: "Kevin Chen",
      pic: "./photos/kevinchen.png",
    },
    {
      name: "Ignacio Lu",
      pic: "./photos/ignaciolu.png",
    },
    {
      name: "Elaine Liang",
      pic: "./photos/elaineliang.png",
    },
    {
      name: "Carina Huang",
      pic: "./photos/carinahuang.png",
    },
    {
      name: "Donny Li",
      pic: "./photos/donnyli.png",
    },
    {
      name: "Boyu Fan",
      pic: "./photos/boyufan.png",
    },
    {
      name: "Anna Song",
      pic: "./photos/annasong.png",
    },
    {
      name: "Mary Guo",
      pic: "./photos/maryguo.png",
    },
    {
      name: "Leah Xue",
      pic: "./photos/leahxue.png",
    },
    {
      name: "Sarch Chen",
      pic: "./photos/sarahchen.png",
    },
    {
      name: "TJ Dong",
      pic: "./photos/tjdong.png",
    },
    {
      name: "Jason Hunag",
      pic: "./photos/jasonhuang.png",
    },
    {
      name: "Richard Zhuang",
      pic: "./photos/richardzhuang.png",
    },
  ];

  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid container sx={{ pl: 20, pt: 4 }}>
          <Typography variant="h4">Members</Typography>
          <Button
            variant="elevated"
            sx={{
              bgcolor: "#2F9E41",
              fontWeight: "bold",
              boxShadow: "0px 3px 6px #00000029",
              ml: 2,
            }}
            onClick={() => {
              navigate("/submitinfo");
            }}
          >
            Submit Information
          </Button>
        </Grid>
        {members.map((member) => {
          return (
            <Grid
              container
              sx={{
                bgcolor: "transparent",
                width: 300,
                height: 300,
                px: 20,
              }}
            >
              <Grid
                container
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid container>
                  <Grid item justifyContent="flex-start">
                    <Avatar
                      alt={member.name}
                      src={require(`${member.pic}`)}
                      sx={{
                        width: 225,
                        height: 225,
                      }}
                      onClick={() => {
                        navigate("/Members/" + member.name);
                      }}
                      variant="rounded"
                    ></Avatar>
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {member.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
