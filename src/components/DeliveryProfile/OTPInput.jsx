import React from "react";
import OtpInput from "react-otp-input";

const CustomOTPInput = ({ otp, setOtp }) => {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderInput={(props) => <input {...props} />}
      inputType="tel"
      shouldAutoFocus
      inputStyle="h-12 min-w-[64px] border border-secondary outline-none text-lg font-medium"
      containerStyle="flex items-center justify-between mb-[50px]"
    />
  );
};

export default CustomOTPInput;
