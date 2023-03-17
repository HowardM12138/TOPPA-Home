/* Component Import */
import NavBar from "./NavBar";
import BondingCard from "./BondingCard.js";

/* MUI Import */
import { Grid, Box } from "@mui/material";

export default function BondingGroup() {
  const groups = [
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco",
          pic: "./photos/coco.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Hidy",
          pic: "./photos/hidy.png",
          vx: "./photos/hidyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
          vx: "./photos/cocovx.JPG",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Howard",
          pic: "./photos/howard.png",
          vx: "./photos/howardvx.png",
        },
        {
          isLeader: false,
          name: "Jenny",
          pic: "./photos/jenny.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Jingfeng",
          pic: "./photos/jingfeng.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
          vx: "./photos/cocovx.JPG",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Howard",
          pic: "./photos/howard.png",
          vx: "./photos/howardvx.png",
        },
        {
          isLeader: false,
          name: "Jenny",
          pic: "./photos/jenny.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Jingfeng",
          pic: "./photos/jingfeng.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
          vx: "./photos/cocovx.JPG",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco",
          pic: "./photos/coco.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Hidy",
          pic: "./photos/hidy.png",
          vx: "./photos/hidyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
          vx: "./photos/cocovx.JPG",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco",
          pic: "./photos/coco.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Hidy",
          pic: "./photos/hidy.png",
          vx: "./photos/hidyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
          vx: "./photos/cocovx.JPG",
        },
      ],
    },
    {
      bondingGroup: [
        {
          isLeader: true,
          name: "Coco",
          pic: "./photos/coco.png",
          vx: "./photos/cocovx.JPG",
        },
        {
          isLeader: false,
          name: "Hidy",
          pic: "./photos/hidy.png",
          vx: "./photos/hidyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Persy",
          pic: "./photos/persy.png",
          vx: "./photos/persyvx.jpeg",
        },
        {
          isLeader: false,
          name: "Wilson",
          pic: "./photos/wilson.png",
          vx: "./photos/cocovx.JPG",
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
        <Grid container sx={{ mt: 5, mr: 4, ml: 2.5 }}>
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
