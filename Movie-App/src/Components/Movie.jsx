import {
  Card,
  Grid,
  CardMedia,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { Id } = useParams();
  const [movie, setMovie] = useState(null);
  const [value, setValue] = useState(4.5);

  const handleWatchlist = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(
        `http://localhost:3000/user/watchList/add/${movie._id}`,
        {}, // An empty object as the body
        config
      );
      alert("Movie added to watchlist");
    } catch (error) {
      console.error("Failed to add to watchlist:", error);
      alert("Failed to add to watchlist");
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:3000/user/movies/${Id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setMovie(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [Id]);

  if (!movie) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  return (
    <Grid container spacing={0} justifyContent="center" sx={{ marginTop: 5 }}>
      <Grid item sx={{ marginLeft: 10 }}>
        <Card sx={{ width: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="600"
            image={movie.imageLink}
          />
        </Card>
      </Grid>

      <Grid item>
        <Card
          sx={{
            backgroundColor: "black",
            margin: 0,
            width: 600,
            height: 600,
            paddingX: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" style={{ color: "white" }}>
            {movie.title}
          </Typography>

          <Typography variant="h6" style={{ color: "white", marginTop: 15 }}>
            {movie.description}
          </Typography>

          <Typography variant="h6" style={{ color: "white", marginTop: 15 }}>
            Genre : <span style={{ color: "orange" }}>{movie.genre}</span>
          </Typography>

          <Typography
            variant="h6"
            style={{ color: "white", marginTop: 12, fontSize: 16 }}
          >
            Release Date :{" "}
            <span style={{ color: "orange" }}>{movie.releaseDate}</span>
          </Typography>

          <Typography>
            <Rating
              value={movie.rating}
              sx={{
                marginLeft: 0,
                marginY: 2,
                fontSize: 35,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "orange",
              borderColor: "orange",
              ":hover": {
                borderColor: "orange",
                backgroundColor: "orange",
                color: "white",
              },
              maxWidth: 200,
              marginY: 3,
            }}
            onClick={handleWatchlist}
          >
            Add to Watchlist
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Movie;
