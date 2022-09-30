import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data } = useQuery(GET_POST_INFO, { variables: { slug } });

  if (loading) return <p>loading...</p>;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={9}
        >
          <Typography
            component="h4"
            variant="h4"
            fontWeight={700}
            color="primary"
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            style={{ borderRadius: 15 }}
            width="100%"
          />
        </Grid>
        <Grid item xs={12} mt={6} display="flex">
          <Avatar
            src={data.post.author.pic.url}
            style={{ width: 80, height: 80, marginLeft: 10 }}
          />
          <Box component="div">
            <Typography component="h5" variant="h5" mb={2}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.primary">
              {data.post.author.filed}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={3}>
          <div
            dangerouslySetInnerHTML={{ __html: data.post.content.html }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
