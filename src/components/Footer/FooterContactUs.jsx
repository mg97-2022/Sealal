import { useRef } from "react";
import LangUtils from "@/utils/language";

const FooterContactUs = () => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-secondary py-12">
      <div className="container">
        <div className="px-20 flex items-center justify-between flex-col lg:flex-row gap-4">
          <div>
            <h3 className="text-3xl text-primary mb-1 font-extrabold text-center lg:text-left">
              {LangUtils.FetchWord("contactUs")}
            </h3>
            <p className="text-greyDark">
              {LangUtils.FetchWord("contactUsDescription")}
            </p>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex items-center h-[50px] w-[400px] lg:w-[500px] max-w-[100%] rounded-[100px] overflow-hidden">
              <input
                className="px-4 h-full w-[70%] text-sm border-none outline-none"
                ref={inputRef}
                type="email"
                placeholder={LangUtils.FetchWord("yourEmail")}
              />
              <button
                className="h-full w-[30%] bg-primary text-white uppercase font-semibold text-[13px]"
                type="submit"
              >
                {LangUtils.FetchWord("subscribe")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
