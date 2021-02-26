import React from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { SEO } from '../SEO';
import { Transition } from '../Transition';

interface LayoutProps {
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <>
    <SEO title={title} />
    <Nav />
    <Transition className="flex-grow transition-wrapper site-container">
      {children}
    </Transition>
    <Footer />
  </>
);

export default Layout;
