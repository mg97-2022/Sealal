const TextArea = ({
  containerClassName,
  label,
  name,
  placeholder,
  cols,
  rows,
  register,
  required = true,
  errorMessage,
  textAreaClassName,
}) => {
  return (
    <div
      className={`flex flex-col justify-between min-w-[110px] w-full ${containerClassName}`}
    >
      <label
        className={`mb-3 first-letter-capitalize text-sm ${
          errorMessage && "text-[10px] text-red-500"
        }`}
        htmlFor={name}
      >
        {label}
        {!!errorMessage && <span>{errorMessage}</span>}
      </label>
      <textarea
        className={`resize-none rounded-2 rounded-[10px] border bg-white border-greyLightFifth outline-none py-2 px-2 text-xs placeholder:text-greyLightFourth ${textAreaClassName} ${
          !!errorMessage && "border-red-500"
        }`}
        id={name}
        {...register(name, {
          required: required && ` is required *`,
        })}
        placeholder={placeholder || label}
        cols={cols || "30"}
        rows={rows || "10"}
      />
    </div>
  );
};

export default TextArea;
