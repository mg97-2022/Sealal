import LangUtils from "@/utils/language";

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
        className={`cursor-pointer rounded-2 rounded-[10px] border border-greyLightFifth outline-none w-6 h-6  px-2 accent-secondary ${inputClassName}`}
        id={name}
        {...register(name)}
        {...input}
      />
      <label
        className={
          "cursor-pointer first-letter:capitalize lg:text-lg text-greyDark"
        }
        htmlFor={name}
      >
        {LangUtils.FetchWord(label)}
      </label>
    </div>
  );
};

export default Checkbox;
