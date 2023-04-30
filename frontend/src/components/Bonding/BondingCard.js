/* Package Import */
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

/* MUI Import */
import { Typography, Grid, Avatar, Box, styled } from "@mui/material";

export default function BondingCard(props) {
  const navigate = useNavigate();
  const EnlargeAvatar = styled(Avatar)(({ theme }) => ({
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }));
  return (
    <div>
      <Box
        sx={{
          flexGrow: 7,
          ml: 0.5,
          mt: 4,
          bgcolor: "#F2FFCC",
          width: 450,
          height: 600,
          borderRadius: 8,
          boxShadow: "0px 3px 6px #00000029",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ p: 1 }}
        >
          <Grid item>
            <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
              Group
            </Typography>
            {props.group.map((input) => {
              if (input.isLeader === true) {
                return (
                  <Grid
                    container
                    sx={{
                      width: 200,
                      height: 150,
                      pt: 1,
                      backgroundColor: "transparent",
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
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <EnlargeAvatar
                            alt={input.name}
                            // src={require(input.pic)}
                            sx={{
                              width: 128,
                              height: 128,
                              boxShadow: "0px 3px 6px #00000029",
                            }}
                            onClick={() => {
                              navigate(
                                "/Members/" +
                                  input.name.toLowerCase().replace(/\s+/g, "")
                              );
                            }}
                          ></EnlargeAvatar>
                          <Typography
                            align="center"
                            sx={{
                              fontWeight: "bold",
                            }}
                          >
                            {input.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
        <Grid container>
          {props.group.map((input) => {
            if (input.isLeader === false) {
              return (
                <Grid
                  container
                  sx={{
                    width: 180,
                    height: 140,
                    m: 2.5,
                    backgroundColor: "transparent",
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
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid item>
                        <EnlargeAvatar
                          alt={input.name}
                          // src={require(input.pic)}
                          sx={{
                            width: 100,
                            height: 100,
                          }}
                          onClick={() => {
                            navigate(
                              "/Members/" +
                                input.name.toLowerCase().replace(/\s+/g, "")
                            );
                          }}
                        ></EnlargeAvatar>
                        <Typography
                          align="center"
                          sx={{
                            fontWeight: "bold",
                          }}
                        >
                          {input.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </div>
  );
}
