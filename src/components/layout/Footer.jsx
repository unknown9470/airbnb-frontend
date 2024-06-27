// Footer.jsx
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, width: "100%" }}
      color="secondary"
    >
      <Toolbar>
        <Box sx={{ textAlign: "center", flexGrow: 1 }}>
          <Typography variant="body1" color="inherit">
            IA AIRBNB © 2024
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
