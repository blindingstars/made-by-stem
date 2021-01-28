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
  components: { 'img-sharp-inline': ImgSharpInline },
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
      <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
    )}
  </>
);
