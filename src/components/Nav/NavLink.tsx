import * as React from 'react';
import { Link } from '../Link';

interface INavLinkProps {
  to?: string;
}

const NavLink: React.FC<INavLinkProps> = ({ to = '#', children }) => {
  return (
    <Link
      to={to}
      className="px-1 py-2 mr-0 mr-4 text-xl text-mint font-caps sm:mb-0 lg:py-0 hover:text-white last:mr-0"
      activeClassName="text-white"
    >
      {children}
    </Link>
  );
};

export { NavLink };
