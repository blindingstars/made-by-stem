import { graphql, useStaticQuery } from 'gatsby';

export const useGhostNavItems = () => {
  const data = useStaticQuery<GatsbyTypes.GhostNavItemsQuery>(graphql`
    query GhostNavItems {
      ghostSettings {
        navigation {
          label
          url
        }
      }
    }
  `);
  return data.ghostSettings.navigation;
};
