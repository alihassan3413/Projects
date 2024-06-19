import { styled } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

const GlassmorphicBox = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(5px)",
  borderRadius: 8,
  padding: theme.spacing(4),
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
}));

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        username,
        password,
      });

      console.log(response.data.token);
    } catch (error) {
      console.log("ALi");
    }
  };
  return (
    // <Grid
    //   container
    //   justifyContent="center"
    //   alignItems="center"
    //   style={{
    //     minHeight: "100vh",
    //     backgroundColor: "black",
    //     backgroundImage:
    //       "url(https://www.hdwallpapers.in/download/raya_and_the_last_dragon_2021_4k_hd_raya_and_the_last_dragon-2560x1440.jpg)",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     zIndex: -1,
    //     marginTop: -80,
    //   }}
    // >
    //   <Grid item xs={10} sm={6} md={4}>
    //     <GlassmorphicBox>
    //       <Typography variant="h5" align="center" gutterBottom>
    //         Login
    //       </Typography>
    //       <form>
    //         <TextField
    //           fullWidth
    //           label="Username"
    //           variant="outlined"
    //           margin="normal"
    //           onChange={(e) => setUsername(e.target.value)}
    //           InputProps={{
    //             style: {
    //               background: "transparent",
    //             },
    //           }}
    //         />
    //         <TextField
    //           fullWidth
    //           label="Password"
    //           type="password"
    //           variant="outlined"
    //           margin="normal"
    //           onChange={(e) => setPassword(e.target.value)}
    //           InputProps={{
    //             style: {
    //               background: "transparent",
    //             },
    //           }}
    //         />
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           fullWidth
    //           style={{ marginTop: 16 }}
    //           onClick={handleLogin}
    //         >
    //           Login
    //         </Button>
    //       </form>
    //     </GlassmorphicBox>
    //   </Grid>
    // </Grid>
    <Grid container spacing={0} sx={{ justifyContent: "center", marginTop: 3 }}>
      <Grid item>
        <Card sx={{ width: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="600"
            image="https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-International-01.jpeg?fit=1382%2C2048&quality=80&strip=info&ssl=1"
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
          <Typography variant="h6">Login in to your account.</Typography>
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
            onClick={handleLogin}
            variant="contained"
            sx={{ marginTop: 2, maxWidth: 120 }}
          >
            Log in
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
