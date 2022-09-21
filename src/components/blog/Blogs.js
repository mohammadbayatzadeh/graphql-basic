import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import { CardEL } from "../shared/CardEL";

export const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOG_INFO);
  return (
    <>
      {loading && <div>loading...</div>}
      <Grid container spacing={2}>
        {data &&
          data.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <CardEL {...post} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
