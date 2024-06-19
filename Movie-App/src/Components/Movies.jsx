import { Button, Card, Grid, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardActionArea } from "@mui/material";
import axios from "axios";

function Movies() {
  const buttons = [
    "Trending",
    "Latest",
    "Recommended",
    "Most popular",
    "2024",
    "Action",
  ];

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div
        style={{
          marginTop: 180,
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          marginLeft: 60,
          marginRight: 60,
        }}
      >
        {buttons.map((button, index) => (
          <Button
            variant={index === 0 ? "contained" : "outlined"}
            sx={{
              borderRadius: 5,
              width: "150px",
              textAlign: "center",
              backgroundColor: index === 0 ? "orange" : "transparent",
              color: "white",
              borderColor: index === 0 ? "orange" : "white",
              "&:hover": {
                backgroundColor:
                  index === 0 ? "darkorange" : "rgba(255, 255, 255, 0.3)",
                borderColor: index === 0 ? "darkorange" : "darkorange",
              },
            }}
          >
            {button}
          </Button>
        ))}
      </div>

      <Grid
        container
        spacing={4}
        sx={{ paddingX: 8, marginTop: 4, justifyContent: "center" }}
      >
        {movies.map((movie) => (
          <Grid item>
            <Card sx={{ width: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                image={movie.imageLink}
              />
            </Card>
            <Typography sx={{ color: "white", marginTop: "5px" }}>
              {movie.title}
            </Typography>
            <Typography sx={{ color: "white" }}>
              {movie.genre}{" "}
              <Button
                sx={{ marginLeft: 6, color: "orange" }}
                onClick={() => navigate(`/movies/${movie._id}`)}
              >
                View more
              </Button>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Movies;
