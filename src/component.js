import React from "react";
import { Query } from "react-apollo";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const query = gql`
  query me {
    me {
      id
      email
      firstName
      lastName

      createdAt
      updatedAt
    }
  }
`;

export default function Component(props) {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <p> wait, loading</p>;
  }
  if (error) {
    return <p> {error.message}</p>;
  }

  if (!data) {
    console.log(data);
    return <p> no data</p>;
  }
  return (
    <div>
      <h2>{data.me.firstName}</h2>
    </div>
  );
}
