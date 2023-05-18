const InputField = ({
  containerClassName,
  label,
  name,
  type,
  placeholder,
  register,
  required = true,
  errorMessage,
  inputClassName,
  input,
}) => {
  return (
    <div className={`flex flex-col justify-between min-w-[110px] w-full ${containerClassName}`}>
      <label
        className={`mb-3 first-letter-capitalize text-sm ${
          errorMessage && "text-[10px] text-red-500"
        }`}
        htmlFor={name}
      >
        {label}
        {!!errorMessage && <span>{errorMessage}</span>}
      </label>
      <input
        className={`bg-transparent rounded-2 rounded-[10px] border border-black outline-none h-10 px-2 text-xs placeholder:text-greyLightFourth ${inputClassName} ${
          !!errorMessage && "border-red-500"
        }`}
        id={name}
        type={type || "text"}
        {...register(name, {
          required: required && ` is required *`,
        })}
        placeholder={placeholder || label}
        {...input}
      />
    </div>
  );
};

export default InputField;