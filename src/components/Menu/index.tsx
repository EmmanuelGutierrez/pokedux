import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import pokeLogo from "../../static/images/logo_v4.svg";

const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 64, p: 1 }}
          alt="logo"
          src={pokeLogo}
        />
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Favorites</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Menu };
