import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Authors } from "./Author/Authors";
import { Blogs } from "./blog/Blogs";

export const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container padding={4} spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};
