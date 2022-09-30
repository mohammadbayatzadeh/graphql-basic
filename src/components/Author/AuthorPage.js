import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { CardEL } from "../shared/CardEL";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <p>loading...</p>;
  const { author } = data;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          padding={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={author.pic.url}
            sx={{
              width: 250,
              height: 250,
            }}
          />
          <Typography component="h4" variant="h4" fontWeight={600} mt={2}>
            {author.name}
          </Typography>
          <Typography component="h5" variant="h5" color="text.secondery" mt={1}>
            {author.filed}
          </Typography>
        </Grid>
        <Grid item>
          <div dangerouslySetInnerHTML={{ __html: author.about.html }}></div>
        </Grid>
        <Typography component="h3" variant="h5" fontWeight={700} mt={5}>
          مقالات {author.name}
        </Typography>
        <Grid container spacing={2} mt={2}>
          {author.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <CardEL
                title={post.title}
                slug={post.slug}
                coverPhoto={post.coverPhoto}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
