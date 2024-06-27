import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="" sx={{ top: "auto", bottom: 0, marginTop:2 }} color="secondary">
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
