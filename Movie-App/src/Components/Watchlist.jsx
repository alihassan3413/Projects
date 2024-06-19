import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  Rating,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function WatchList() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await axios.get("http://localhost:3000/user/watchList", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMovie(resp.data);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "white", marginLeft: 8, marginTop: 6 }}
      >
        Watch List
      </Typography>

      <Grid container spacing={8} sx={{ padding: 8 }}>
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
            <Typography variant="h5" sx={{ color: "white", marginTop: "5px" }}>
              {movie.title}
            </Typography>
            <Typography sx={{ color: "white" }}>{movie.genre}</Typography>

            <Typography>
              <Rating
                value={movie.rating}
                sx={{
                  marginLeft: 0,
                  marginY: 2,
                  fontSize: 17,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Typography>
            <Button variant="contained">Watch Now</Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default WatchList;
