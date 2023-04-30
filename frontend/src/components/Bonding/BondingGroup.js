/* Component Import */
import NavBar from "../NavBar";
import BondingCard from "./BondingCard.js";

/* MUI Import */
import { Grid, Box } from "@mui/material";
import cocoimage from "../photos/cocoma.png";

export default function BondingGroup() {
  const groups = [
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco Ma",
          pic: "../photos/cocoma.png",
        },
        {
          isLeader: false,
          name: "Hidy Chan",
          pic: "../photos/hidychan.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Howard Meng",
          pic: "../photos/howardmeng.png",
        },
        {
          isLeader: false,
          name: "Jenny Wang",
          pic: "../photos/jennywang.png",
        },
        {
          isLeader: false,
          name: "Jingfeng Yang",
          pic: "../photos/jingfengyang.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Howard Meng",
          pic: "../photos/howardmeng.png",
        },
        {
          isLeader: false,
          name: "Jenny Wang",
          pic: "../photos/jennywang.png",
        },
        {
          isLeader: false,
          name: "Jingfeng Yang",
          pic: "../photos/jingfengyang.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco Ma",
          pic: "../photos/cocoma.png",
        },
        {
          isLeader: false,
          name: "Hidy Chan",
          pic: "../photos/hidychan.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco Ma",
          pic: "../photos/cocoma.png",
        },
        {
          isLeader: false,
          name: "Hidy Chan",
          pic: "../photos/hidychan.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco Ma",
          pic: "../photos/cocoma.png",
        },
        {
          isLeader: false,
          name: "Hidy Chan",
          pic: "../photos/hidychan.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Persy Zhu",
          pic: "../photos/persyzhu.png",
        },
        {
          isLeader: false,
          name: "Wilson He",
          pic: "../photos/wilsonhe.png",
        },
      ],
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid container sx={{ mt: 3, mr: 4, ml: 2.5, mb: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 1 }}
          >
            {groups.map((group) => {
              return (
                <Grid item md={4} sx={{ p: 2 }}>
                  <BondingCard group={group.bondingGroup}></BondingCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
