import { useRef } from "react";
import LangUtils from "@/utils/language";

const SearchBar = () => {
  const inputRef = useRef();
  return (
    <input
      type="search"
      ref={inputRef}
      className="w-[440px] max-w-[100%] h-[50px] rounded-full px-10 outline-none border border-primary text-[#626262]"
      placeholder={LangUtils.FetchWord("searchFor")}
    />
  );
};

export default SearchBar;
