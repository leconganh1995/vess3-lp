export const Title = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h3
      className={className + " text-3xl md:text-4xl font-bold text-ghost-white"}
      {...props}
    >
      {children}
    </h3>
  );
};

export const SubTitle = ({
  className,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h4 className={className + " text-xl text-ceil font-bold"} {...props}>
      {children}
    </h4>
  );
};
