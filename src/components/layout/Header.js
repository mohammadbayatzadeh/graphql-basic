import * as React from "react";
import { Container, Typography, Toolbar, AppBar } from "@mui/material";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight={700} flex={1}>
            کاستوم وبلاگ
          </Typography>
          <Link to="/" style={{ color: "#fff" }}>
            <CarpenterIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
