import CheckedIcon from "./icons/CheckedIcon";
import UncheckedIcon from "./icons/UncheckedIcon";

const RadioInput = ({ value, name, checkedValue, register }) => {
  const isChecked = checkedValue === value;
  return (
    <label className="capitalize whitespace-nowrap w-min">
      <input
        type="radio"
        value={value}
        {...register(name)}
        checked={isChecked}
        className="invisible w-0 h-0"
      />
      {isChecked ? (
        <CheckedIcon className="inline-block mr-[10px] relative top-[-2px]" />
      ) : (
        <UncheckedIcon className="inline-block mr-[10px] relative top-[-2px]" />
      )}
      {value}
    </label>
  );
};

export default RadioInput;
