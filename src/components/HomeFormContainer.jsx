const HomeFormContainer = ({ children, icon, title }) => {
  return (
    <div className="bg-greyLightFirst rounded-[10px] relative pt-16 pb-7 h-full w-full">
      <span className="flex items-center justify-center absolute top-[-55px] bg-greyLightFirst left-[50%] translate-x-[-50%] w-[110px] h-[110px] border-white border-[10px] rounded-full">
        {icon}
      </span>
      <h3 className="text-lg tracking-[1.5px] text-primary pb-5 text-center first-letter:capitalize">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default HomeFormContainer;
