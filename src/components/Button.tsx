interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary";
  spanClassName?: string;
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
  spanClassName = "",
  ...props
}: Props) => {
  return (
    <button
      className={
        className +
        ` ${
          variant === "primary"
            ? `border border-solid border-[rgba(255,255,255,0.3)]`
            : ` border border-solid border-[rgba(255,255,255,0.3)]`
        } text-white rounded-[12px] transition hover:brightness-75 p-[5px]`
      }
      {...props}
    >
      <span
        className={`${spanClassName} flex w-full ${
          variant === "primary"
            ? "bg-[#4BF7E266] border border-[#FFFFFF26] shadow-[0px_0px_6px_3px_#FFFFFF40_inset] backdrop-blur"
            : "bg-transparent"
        } text-sm text-white  justify-center rounded-[10px] py-2 px-5 font-[200] whitespace-nowrap`}
      >
        {children}
      </span>
    </button>
  );
};
