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
  const inputs = [
    {
      title: "Name",
      placeholder: "Enter your name",
    },
    {
      title: "Event",
      placeholder: "Enter which event you participated",
    },
    {
      title: "Amount",
      placeholder: "Enter the amount you paid",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div>
      <NavBar />
      <Card variant="outlined">
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
            sx={{ p: 8 }}
          >
            <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
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
            {inputs.map((input) => {
              return (
                <Grid
                  item
                  md={4}
                  sx={{
                    width: 600,
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {input.title}
                  </Typography>
                  <Input
                    placeholder={input.placeholder}
                    size="md"
                    sx={{ p: 2, bgcolor: "#CFF1D4" }}
                  />
                </Grid>
              );
            })}
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
              }}
            >
              Submit
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
