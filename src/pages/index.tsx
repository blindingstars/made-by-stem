import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import { SlimContainer } from '../components/Container';

const HomePage: React.FC<PageProps<GatsbyTypes.HomepageQuery>> = ({ data }) => (
  <Layout>
    <SlimContainer className="flex items-center justify-center h-full">
      <h1 className="text-5xl text-center font-accent">Coming Soon</h1>
    </SlimContainer>
  </Layout>
);

export const query = graphql`
  query Homepage {
    site {
      siteMetadata {
        title
        titleShort
        buildContext
        version
      }
    }
    siteBuildMetadata {
      buildTime
    }
  }
`;

export default HomePage;
