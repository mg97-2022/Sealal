import { useState } from "react";
import LangUtils from "@/utils/language";
import CustomOTPInput from "./OTPInput";

const DeliveryCodeVerification = () => {
  const [otp, setOtp] = useState("");

  const verifyCodeHandler = () => {};

  const resendCodeHandler = () => {};

  return (
    <section className="h-[50vh] flex items-center justify-center">
      <div className="text-center w-[460px]">
        <h2 className="text-2xl first-letter:capitalize font-medium text-primary mb-1">
          {LangUtils.FetchWord("codeVerification")}
        </h2>
        <p className="text-sm text-[#31394D] mb-5">
          {LangUtils.FetchWord("enterOTP")}
        </p>
        <CustomOTPInput otp={otp} setOtp={setOtp} />
        <button
          className="text-white first-letter:capitalize bg-primary w-full font-semibold py-3 rounded-[6px] mb-6"
          onClick={verifyCodeHandler}
          type="button"
        >
          {LangUtils.FetchWord("verifyCode")}
        </button>
        <button
          type="button"
          onClick={resendCodeHandler}
          className="text-secondary font-medium first-letter:capitalize"
        >
          {LangUtils.FetchWord("resendCode")}
        </button>
      </div>
    </section>
  );
};

export default DeliveryCodeVerification;
