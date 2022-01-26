import * as React from "react";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query {
    example: file(name: { eq: "example" }) {
      id
      lastUpdated: modifiedTime
      name
      ext
      internal {
        content
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      <p>Should say "success" in box:</p>
      <div
        dangerouslySetInnerHTML={{ __html: data.example.internal.content }}
        style={{
          border: "1px solid red",
          margin: "0 0 20px",
          padding: "5px 15px",
        }}
      />

      <div>
        <p>
          <strong>
            {data.example.name}
            {data.example.ext}
          </strong>{" "}
          - last updated: {data.example.lastUpdated}
          <br /> ID: {data.example.id}
        </p>
      </div>
    </main>
  );
};

export default IndexPage;
