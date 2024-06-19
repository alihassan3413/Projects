import { Box, Button, Grid, Typography, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import Footer from "./Footer";
import Caraousel from "./Caraousel";
import axios from "axios";

function Home() {
  const [value, setValue] = useState(4.5);
  const buttons = [
    "Trending",
    "Latest",
    "Recommended",
    "Most popular",
    "2024",
    "Action",
  ];

  return (
    <>
      <Grid container spacing={0}>
        <Grid item sm={6} md={12} xs={8}>
          <Box
            sx={{
              height: "100vh",
              width: "100%", // Adjust height as needed
              backgroundImage:
                "url(https://www.hdwallpapers.in/download/raya_and_the_last_dragon_2021_4k_hd_raya_and_the_last_dragon-2560x1440.jpg)", // Direct image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: -1,
              marginTop: -10,
              padding: 0,
              position: "relative",
            }}
          ></Box>
        </Grid>
      </Grid>

      <div style={{ boxShadow: "10" }}>
        <Typography
          sx={{
            color: "white",
            zIndex: 1,
            marginTop: -72,
            marginLeft: 8,
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: 70,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
          variant="h1"
        >
          RAYA AND THE <br /> LAST DRAGON
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily: "cursive",
            fontWeight: 600,
            marginLeft: 8,
            boxShadow: "initial",
            marginTop: 3,
          }}
        >
          Watch it now available in{" "}
          <span style={{ color: "orange" }}>book tickets</span> in Cinemas.
        </Typography>

        <p
          style={{
            maxWidth: 550,
            color: "white",
            fontFamily: "cursive",
            fontSize: 15,
            marginLeft: 62,
            marginTop: 20,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores est
          maxime temporibus mollitia animi quo in reprehenderit neque voluptates
          architecto? Inventore corporis architecto exercitationem incidunt
          libero ut soluta. Et, dicta. Delectus temporibus pariatur esse
          laboriosam nisi libero incidunt vitae porro dolorum recusandae hic
          voluptatem et cumque repellendus.
        </p>

        <Typography>
          <Rating
            value={value}
            sx={{
              marginLeft: 8,
              fontSize: 35,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Typography>

        <Button
          variant="contained"
          sx={{ marginLeft: 8, paddingX: 4, paddingY: 1, marginTop: 1 }}
        >
          Watch Now
        </Button>
      </div>

      <Movies />
      <Caraousel />
      <Footer />
    </>
  );
}

export default Home;
