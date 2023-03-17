import {
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar,
    Box,
  } from "@mui/material";
  
  export default function BondingCard(props) {
    return (
      <div>
        {/* <Card
                  variant="outlined"
                  sx={{
                      bgcolor: "#F2FFCC",
                      width: 480,
                      height: 600,
                      ml: 0.5,
                      mt: 8,
                  }}
              > */}
        <Box
          sx={{
            flexGrow: 7,
            ml: 0.5,
            mt: 8,
            bgcolor: "#F2FFCC",
            width: 480,
            height: 800,
          }}
        >
          {/* <CardContent
                      component="div"
                      sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                      }}
                  > */}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ p: 2 }}
          >
            <Grid item>
              <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
                Leader
              </Typography>
              {props.group.map((input) => {
                if (input.isLeader === true) {
                  return (
                    <Grid
                      container
                      sx={{
                        width: 210,
                        height: 190,
                        m: 2,
                        pt: 1,
                        pb: 2,
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
                            <Avatar
                              alt={input.name}
                              src={require(`${input.pic}`)}
                              sx={{
                                width: 148,
                                height: 148,
                              }}
                            ></Avatar>{" "}
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
                      width: 200,
                      height: 180,
                      m: 2,
                      pt: 2,
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
                          <Avatar
                            alt={input.name}
                            src={require(`${input.pic}`)}
                            sx={{
                              width: 110,
                              height: 110,
                            }}
                          ></Avatar>
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
          {/* <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                          >
                              
                          </Grid> */}
          {/* </CardContent> */}
        </Box>
      </div>
    );
  }