import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";

export const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  console.log(data);

  if (loading) return <p>loading...</p>;

  if (data) return <div>Authors</div>;
};
