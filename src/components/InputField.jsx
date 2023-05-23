import LangUtils from "@/utils/language";

const InputField = ({
  containerClassName,
  label,
  name,
  type,
  placeholder,
  register,
  required = true,
  otherValidations,
  errorMessage,
  inputClassName,
  labelClassName,
  input,
}) => {
  return (
    <div
      className={`flex flex-col justify-between w-full ${containerClassName}`}
    >
      <label
        className={`mb-3 first-letter:capitalize text-sm ${
          errorMessage && "text-xs text-red-500"
        } ${labelClassName}`}
        htmlFor={name}
      >
        {LangUtils.FetchWord(label)}
        {!!errorMessage && <span>{LangUtils.FetchWord(errorMessage)}</span>}
      </label>
      <input
        className={`bg-transparent rounded-2 rounded-[10px] border border-black outline-none h-10 px-2 text-xs placeholder:capitalize ${
          !!errorMessage
            ? "placeholder:text-red-500"
            : "placeholder:text-greyLightFourth"
        } ${inputClassName} ${!!errorMessage && "border-red-500"}`}
        id={name}
        type={type || "text"}
        {...register(name, {
          required: {
            value: required,
            message: "isRequired",
          },
          ...otherValidations,
        })}
        placeholder={
          LangUtils.FetchWord(placeholder) || LangUtils.FetchWord(label)
        }
        {...input}
      />
    </div>
  );
};

export default InputField;
