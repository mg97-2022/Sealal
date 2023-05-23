const HomeFormInputsContainer = ({ children, className }) => {
  return (
    <div
      className={`grid gap-2 py-5 px-[14px] border-b border-b-greyDarkSecondary ${className}`}
    >
      {children}
    </div>
  );
};

export default HomeFormInputsContainer;
