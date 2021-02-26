/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { GatsbyConfig } from 'gatsby';
import {
  siteMetadata,
  manifestOptions,
  googleAnalytics,
  pathPrefix,
  ghostOptions,
} from './config/SiteConfig';

const config: GatsbyConfig = {
  siteMetadata,
  pathPrefix,
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
    },
    {
      resolve: 'gatsby-source-ghost',
      options: ghostOptions,
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/types/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          'src/__generated__/gatsby-schema.graphql': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: googleAnalytics,
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('tailwindcss')()],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-preload-fonts',
    {
      resolve: `gatsby-source-ghost`,
      options: ghostOptions,
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        plugins: [
          'gatsby-rehype-ghost-links',
          {
            resolve: `gatsby-rehype-inline-images`,
            // options: {
            //   withWebp: true,
            //   useImageCache: true,
            // },
          },
        ],
        filter: (node) =>
          ['GhostPost', 'GhostPage'].includes(node.internal.type),
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/Layout/Layout`),
      },
    },
  ],
};

export default config;
