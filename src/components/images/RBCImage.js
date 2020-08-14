import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/rbc.jpg" }) {
        childImageSharp {
          fixed(height: 300, width: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return <Img alt={'Image'} fixed={data.image.childImageSharp.fixed} />;
};
