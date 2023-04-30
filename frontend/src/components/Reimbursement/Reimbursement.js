/* Package Import */
import { useState, useEffect } from "react";

/* Component Import */
import NavBar from "../NavBar";

/* MUI Import */
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import Input from "@mui/joy/Input";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export default function Reimbursement() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState(null);
  const [event, setEvent] = useState(null);
  const [amount, setAmount] = useState(null);
  const onChangeName = (event) => {
    const newInput = event.target.value;
    setName(newInput);
  };
  const onChangeEvent = (event) => {
    const newInput = event.target.value;
    setEvent(newInput);
  };
  const onChangeAmount = (event) => {
    const newInput = event.target.value;
    setAmount(newInput);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const Click = (input) => {
    fetch("http://localhost:4000/Reimbursement", {
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      method: "POST",
      body: JSON.stringify({
        name: name,
        event: event,
        amount: amount,
      }),
    }).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };

  return (
    <div>
      <NavBar />
      <form action="/Reimbursement" method="POST">
        <Card
          sx={{
            height: 800,
          }}
        >
          <CardContent
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                p: 8,
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                Reimbursement Form
              </Typography>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowSpacing={4}
            >
              <Grid
                item
                md={4}
                sx={{
                  width: 600,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Name</Typography>
                <Input
                  placeholder="Enter your name"
                  size="md"
                  sx={{
                    p: 2,
                    bgcolor: "#CFF1D4",
                    boxShadow: "0px 3px 6px #00000029",
                  }}
                  onChange={onChangeName}
                />
              </Grid>

              <Grid
                item
                md={4}
                sx={{
                  width: 600,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Event</Typography>
                <Input
                  placeholder="Enter which event you participated"
                  size="md"
                  sx={{
                    p: 2,
                    bgcolor: "#CFF1D4",
                    boxShadow: "0px 3px 6px #00000029",
                  }}
                  onChange={onChangeEvent}
                />
              </Grid>

              <Grid
                item
                md={4}
                sx={{
                  width: 600,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Amount</Typography>
                <Input
                  placeholder="Enter the amount you paid"
                  size="md"
                  sx={{
                    p: 2,
                    bgcolor: "#CFF1D4",
                    boxShadow: "0px 3px 6px #00000029",
                  }}
                  onChange={onChangeAmount}
                />
              </Grid>

              <Grid
                item
                md={4}
                sx={{
                  width: 600,
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Upload Receipt
                </Typography>
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
                  {imageUrl && selectedImage && (
                    <Box mt={2} textAlign="center">
                      <img
                        src={imageUrl}
                        alt={selectedImage.name}
                        height="100px"
                      />
                    </Box>
                  )}
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item rowSpacing={10}>
              <Button
                variant="elevated"
                sx={{
                  bgcolor: "#2F9E41",
                  fontWeight: "bold",
                  p: 2,
                  boxShadow: "0px 3px 6px #00000029",
                }}
                onClick={Click}
              >
                Submit
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
