import * as React from 'react';
import classNames from 'classnames';

export interface SlimContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
  verticalPadding?: boolean;
}

const SlimContainer: React.FC<SlimContainerProps> = ({
  children,
  className,
  centered = true,
  verticalPadding = true,
  ...rest
}) => {
  const classes = classNames(
    'container lg:max-w-6xl',
    { 'mx-auto': centered },
    { 'py-12': verticalPadding },
    className,
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { SlimContainer };
