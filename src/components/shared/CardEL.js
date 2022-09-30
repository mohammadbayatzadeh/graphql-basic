import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const CardEL = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        borderRadius: 4,
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.pic.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" variant="p" color="secondery">
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          sx={{ fontWeigth: 600 }}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
