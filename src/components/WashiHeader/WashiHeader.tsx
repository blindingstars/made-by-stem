import * as React from 'react';
import classNames from 'classnames';

export interface WashiHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  alignWithContainer?: boolean;
  autoColor?: boolean;
  tapeColor?: string;
  washiMask?: 1 | 2 | 3 | 4 | 5;
}

const WashiHeader: React.FC<WashiHeaderProps> = ({
  children,
  className,
  alignWithContainer = true,
  autoColor = true,
  tapeColor, // Don't interpolate! Will disrupt Tailwind purge
  washiMask = 2, // Gets interpolated because manual SASS
  ...rest
}) => {
  const containerClasses = classNames(
    'mt-6 mb-2',
    { '-ml-5 -mr-10': alignWithContainer },
    className,
  );
  const textClasses = classNames(
    'text-5xl tracking-tighter leading-extra-tight font-caps relative inline-block py-2',
    { 'pl-5 pr-10': alignWithContainer },
    className,
  );
  const tapeClasses = classNames(
    'absolute inset-0 -z-1 washi-mask',
    `washi-mask-${washiMask}`,
    { 'bg-mint': autoColor },
    tapeColor,
    className,
  );
  return (
    <h2 className={containerClasses} {...rest}>
      <span className={textClasses}>
        {children}
        <span className={tapeClasses} />
      </span>
    </h2>
  );
};

export { WashiHeader };
