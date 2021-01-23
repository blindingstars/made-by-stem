import * as React from 'react';

export interface FooterLinkListProps {
  title: string;
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({
  title = 'Links',
  children,
}) => {
  return (
    <div className="w-full px-4 md:px-8 md:w-auto">
      <h2 className="mb-1 text-2xl text-gray-900 font-caps">{title}</h2>
      <nav className="mb-10 list-none">
        <ul>{children}</ul>
      </nav>
    </div>
  );
};

export { FooterLinkList };
