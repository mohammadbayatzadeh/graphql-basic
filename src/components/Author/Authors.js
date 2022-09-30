import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Link } from "react-router-dom";

export const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <p>loading...</p>;

  const { authors } = data;
  if (data)
    return (
      <Grid
        container
        sx={{
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          borderRadius: 4,
        }}
      >
        {authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2}>
              <Link
                to={`/authors/${author.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <Avatar src={author.pic.url} sx={{ marginLeft: 2 }} />
                <Typography component="p" variant="p" color="text.primary">
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {index !== authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    );
};
