import ReactDatePicker from "react-datepicker";

const DatePicker = ({ onChange, date }) => (
  <ReactDatePicker selected={date} onChange={onChange} inline />
);

export default DatePicker;
