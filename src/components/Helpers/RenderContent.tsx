import React from 'react';
import RehypeReact from 'rehype-react';
import Img from 'gatsby-image';
import SeedRandom from 'seedrandom';
import { WashiHeader } from '../WashiHeader';

export const ImgSharpInline: React.FC<any> = ({ className, fluidImg, alt }) => {
  const fluidImgData = JSON.parse(fluidImg);
  return <Img className={className} fluid={fluidImgData} alt={alt} />;
};

export const GhostH2: React.FC = ({ children, id, ...rest }) => {
  const getRandom = (input) => {
    const random = new SeedRandom(input);
    return Math.floor(random() * 5) + 1;
  };

  const washiMask = React.useMemo(() => getRandom(id), [id]);

  return (
    <WashiHeader id={id} washiMask={washiMask} hasAssignedColor {...rest}>
      {children}
    </WashiHeader>
  );
};

export interface RenderContentProps {
  html?: string;
  htmlAst: any;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
const renderAst = new RehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: { 'img-sharp-inline': ImgSharpInline, h2: GhostH2 },
}).Compiler;

export const RenderContent: React.FC<RenderContentProps> = ({
  htmlAst,
  html,
  className,
}) => (
  <>
    {htmlAst ? (
      <div className={className}>{renderAst(htmlAst)}</div>
    ) : (
      // eslint-disable-next-line react/no-danger
      <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
    )}
  </>
);
