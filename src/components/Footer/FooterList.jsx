import LangUtils from "../../utils/language";

const FooterList = ({ title, list = [] }) => {
  const listLength = list.length;
  return (
    <div>
      <h5 className="text-lg font-bold leading-7 mb-5 first-letter-capitalize">
        {LangUtils.FetchWord(title)}
      </h5>
      <ul>
        {list.map((item, index) => (
          <li key={item} className={"mb-4 text-sm capitalize"}>
            {LangUtils.FetchWord(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
