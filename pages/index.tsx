import React from "react";
import TemplateListing from "../components/TemplateListing";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const TEMPLATES = gql`
  {
    templates {
      id
      name
      description
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(TEMPLATES, {});

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <p>{error.stack}</p>
      </div>
    );
  }

  return <TemplateListing templates={data.templates} />;
};
