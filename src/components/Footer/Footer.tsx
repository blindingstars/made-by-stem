import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { useSiteMetadata, useSocialQuery } from '../../hooks';
import { Link } from '../Link';
import { SlimContainer } from '../Container';
import { Logo } from '../Logo';
import { FooterLinkList as LinkList } from './FooterLinkList';
import { FooterLinkListItem as LinkListItem } from './FooterLinkListItem';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const data = useStaticQuery<GatsbyTypes.FooterDataQuery>(graphql`
    query FooterData {
      siteBuildMetadata {
        buildYear: buildTime(formatString: "Y")
      }
    }
  `);

  const { title, description } = useSiteMetadata();
  const { twitter, facebook, instagram } = useSocialQuery();

  const {
    siteBuildMetadata: { buildYear },
  } = data;
  return (
    <footer className="text-gray-700 body-font">
      <SlimContainer className="flex flex-col flex-wrap py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 mx-auto text-center md:w-72 md:mx-0 md:text-left">
          <Link
            className="inline-flex items-center justify-center font-medium text-left text-gray-900 md:justify-start"
            to="/"
          >
            <Logo
              madeByColor="text-mint-300"
              stemColor="text-primary"
              className="w-48"
            />
          </Link>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left md:justify-end md:-mx-8">
          <LinkList title="Connect with Stephy">
            <LinkListItem to="https://stephy.northxsouth.co">
              Personal Site
            </LinkListItem>
            <LinkListItem to="https://www.northxsouth.co">
              Web Development & Design
            </LinkListItem>
          </LinkList>
        </div>
      </SlimContainer>
      <div className="bg-mint">
        <SlimContainer className="flex flex-col flex-wrap py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            © {buildYear} {title}
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link
              className="text-mint-500 hover:text-mint-700"
              to={`https://facebook.com/${facebook.username}`}
              title="Facebook"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link
              className="ml-3 text-mint-500 hover:text-mint-700"
              to={`https://instagram.com/${instagram.username}`}
              title="Instagram"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
          </span>
        </SlimContainer>
      </div>
    </footer>
  );
};

export { Footer };
