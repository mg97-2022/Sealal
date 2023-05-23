import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";

const DatePicker = ({ dateChangeHandler }) => {
  return (
    <Calendar
      className="bg-[transparent]"
      date={new Date()}
      onChange={dateChangeHandler}
    />
  );
};

export default DatePicker;
