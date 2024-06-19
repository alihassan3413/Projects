import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);
      setUsername("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      console.log("username already exist");
    }
  };
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ justifyContent: "center", marginTop: 3 }}
      >
        <Grid item>
          <Card sx={{ width: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="600"
              image="https://r1.ilikewallpaper.net/iphone-wallpapers/download-150253/the-batman-movie-poster-art-5k.jpg"
            />
          </Card>
        </Grid>
        <Grid item>
          <Card
            sx={{
              backgroundColor: "white",
              height: 600,
              width: 400,
              margin: 0,
              borderRadius: 0,
              paddingX: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Welcome!</Typography>
            <Typography variant="h6">Create you account and enjoy.</Typography>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                style: {
                  background: "transparent",
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              value={password}
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: {
                  background: "transparent",
                },
              }}
            />

            <Button
              onClick={handleSignup}
              variant="contained"
              sx={{ marginTop: 2, maxWidth: 120 }}
            >
              Sign up
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Signup;
