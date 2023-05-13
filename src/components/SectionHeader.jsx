const SectionHeader = ({ heading, description, showSideLines }) => {
  return (
    <div className="my-10 text-center">
      <div className="flex items-center justify-center">
        {showSideLines && <span className="h-[1px] w-[150px] bg-primary"/>}
        <h3 className="px-11  text-[22px]  text-primary font-medium leading-[36px]">{heading}</h3>
        {showSideLines && <span className="h-[1px] w-[150px] bg-primary"/>}
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeader;
