import * as React from 'react';
import classNames from 'classnames';

export interface WashiHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  alignWithContainer?: boolean;
  hasAssignedColor?: boolean;
  tapeColor?: string;
  washiMask?: 1 | 2 | 3 | 4 | 5;
  textSize?: string;
  margin?: string;
}

const WashiHeader: React.FC<WashiHeaderProps> = ({
  children,
  className,
  alignWithContainer = true, // Offsets the tape with negative margin so text lines up
  hasAssignedColor = false, // Is the color already set via :nth magic in SASS?
  tapeColor, // e.g. `bg-mint` Don't interpolate! Will disrupt Tailwind purge
  washiMask = 2, // Gets interpolated because manual SASS
  textSize = 'text-5xl',
  margin = 'mt-6 mb-2',
  ...rest
}) => {
  const containerClasses = classNames(
    margin,
    { '-ml-5 -mr-10': alignWithContainer },
    className,
  );
  const textClasses = classNames(
    'tracking-tighter leading-extra-tight font-caps relative inline-block py-2',
    { 'pl-5 pr-10': alignWithContainer },
    { 'px-5': !alignWithContainer },
    textSize,
  );
  const tapeClasses = classNames(
    'absolute inset-0 -z-1 washi-mask',
    `washi-mask-${washiMask}`,
    { 'bg-mint': !hasAssignedColor && !tapeColor }, // Set a default if nothing passed in
    tapeColor,
  );
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <h2 className={containerClasses} {...rest}>
      <span className={textClasses}>
        {children}
        <span className={tapeClasses} />
      </span>
    </h2>
  );
};

export { WashiHeader };
