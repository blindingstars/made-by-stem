import React from 'react';
import RehypeReact from 'rehype-react';
import Img from 'gatsby-image';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

export const ImgSharpInline: React.FC<any> = ({ className, fluidImg, alt }) => {
  const fluidImgData = JSON.parse(fluidImg);
  const image: IGatsbyImageData = {
    layout: 'fullWidth',
    images: {
      fallback: { src: fluidImgData.src },
      sources: [
        {
          srcSet: fluidImgData.srcSet,
          type: fluidImgData.srcSetType,
        },
      ],
    },
  };
  return <Img className={className} fluid={fluidImgData} alt={alt} />;
};

export const GhostH2 = ({ children }) => {
  return (
    <h2 className="mt-6 mb-2 -ml-5 -mr-10 text-5xl tracking-tighter leading-extra-tight font-caps">
      <span className="relative inline-block py-2 pl-5 pr-10">
        {children}
        <span className="absolute inset-0 -z-1 bg-mint washi-mask washi-mask-2" />
      </span>
    </h2>
  );
};

export interface RenderContentProps {
  html: string;
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
