import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export const TextGradient = ({ className, children, ...props }: Props) => {
  return (
    <p
      className={clsx(
        "bg-[linear-gradient(90deg,_#5A76FF_0%,_rgba(68,_187,_119,_0.886275)_100%)] bg-clip-text inline-block text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
