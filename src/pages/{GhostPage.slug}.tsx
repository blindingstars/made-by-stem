/* eslint-disable react/no-danger */
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { SlimContainer } from '../components/Container';
import { RenderContent } from '../components/Helpers';
import { SEO } from '../components/SEO';

const HomePage: React.FC<PageProps<GatsbyTypes.GhostPageQuery>> = ({
  data,
}) => (
  <SlimContainer>
    <SEO title={data.ghostPage.title} />
    <h1 className="mb-4 text-5xl font-bold text-center">
      {data.ghostPage.title}
    </h1>

    <RenderContent
      className="mx-auto max-w-prose ghost-content"
      htmlAst={data.ghostPage.childHtmlRehype.htmlAst}
    />
  </SlimContainer>
);

export const query = graphql`
  query GhostPage($id: String) {
    ghostPage(id: { eq: $id }) {
      id
      html
      title
      childHtmlRehype {
        html
        htmlAst
      }
    }
  }
`;

export default HomePage;
