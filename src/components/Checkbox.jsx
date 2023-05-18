const Checkbox = ({
  containerClassName,
  label,
  name,
  register,
  inputClassName,
  input,
}) => {
  return (
    <div className={`flex items-center gap-2 ${containerClassName}`}>
      <input
        type="checkbox"
        className={`rounded-2 rounded-[10px] border border-greyLightFifth outline-none w-6 h-6  px-2 accent-secondary ${inputClassName}`}
        id={name}
        {...register(name)}
        {...input}
      />
      <label
        className={"first-letter-capitalize text-lg text-greyDark"}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
