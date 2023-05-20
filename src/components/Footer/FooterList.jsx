import Link from "next/link";
import LangUtils from "@/utils/language";

const FooterList = ({ title, list = [] }) => {
  return (
    <div>
      <h5 className="text-lg font-bold leading-7 mb-5 first-letter:capitalize">
        {LangUtils.FetchWord(title)}
      </h5>
      <ul>
        {list.map((item) => (
          <li key={item.title} className={"mb-4 text-sm capitalize"}>
            <Link href={item.link}>{LangUtils.FetchWord(item.title)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
