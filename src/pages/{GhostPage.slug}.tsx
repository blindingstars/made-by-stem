/* eslint-disable react/no-danger */
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import { SlimContainer } from '../components/Container';

const HomePage: React.FC<PageProps<GatsbyTypes.GhostPageQuery>> = ({
  data,
}) => (
  <Layout>
    <SlimContainer className="py-12">
      <h1 className="mb-4 text-5xl font-bold text-center">
        {data.ghostPage.title}
      </h1>
      <div
        className="mx-auto max-w-prose ghost-content"
        dangerouslySetInnerHTML={{ __html: data.ghostPage.html }}
      />
    </SlimContainer>
  </Layout>
);

export const query = graphql`
  query GhostPage($id: String) {
    ghostPage(id: { eq: $id }) {
      id
      html
      title
    }
  }
`;

export default HomePage;
