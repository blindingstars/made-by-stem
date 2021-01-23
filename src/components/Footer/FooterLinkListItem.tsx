import * as React from 'react';
import { Link } from '../Link';

interface FooterLinkListItemProps {
  to: string;
}

const FooterLinkListItem: React.FC<FooterLinkListItemProps> = ({
  to,
  children,
}) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export { FooterLinkListItem };
