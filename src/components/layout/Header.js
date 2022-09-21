import * as React from "react";
import { Container, Typography, Toolbar, AppBar } from "@mui/material";
import CarpenterIcon from "@mui/icons-material/Carpenter";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight={700} flex={1}>
            کاستوم وبلاگ
          </Typography>
          <CarpenterIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
