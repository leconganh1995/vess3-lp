export const BoundLoading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <div className="h-[6px] w-[6px] bg-white rounded-full animate-bounce"></div>
      <div className="h-[6px] w-[6px] bg-white rounded-full animate-bounce [animation-delay:-0.9s]"></div>
      <div className="h-[6px] w-[6px] bg-white rounded-full animate-bounce [animation-delay:-0.6s]"></div>
      <div className="h-[6px] w-[6px] bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    </div>
  );
};
