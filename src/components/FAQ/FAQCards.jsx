import FAQCard from "./FAQCard";
import CreditIcon from "../icons/CreditIcon";
import DollarIcon from "../icons/DollarIcon";
import SlashIcon from "../icons/SlashIcon";
import TagIcon from "../icons/TagIcon";
import TruckIcon from "../icons/TruckIcon";
import YellowEmailIcon from "../icons/YellowEmailIcon";

const data = [
  {
    id: 1,
    title: "firstTitle",
    description: "firstDescription",
    icon: <YellowEmailIcon />,
  },
  {
    id: 2,
    title: "secondTitle",
    description: "secondDescription",
    icon: <CreditIcon />,
  },
  {
    id: 3,
    title: "thirdTitle",
    description: "thirdDescription",
    icon: <SlashIcon />,
  },
  {
    id: 4,
    title: "fourthTitle",
    description: "fourthDescription",
    icon: <TruckIcon />,
  },
  {
    id: 5,
    title: "fifthTitle",
    description: "fifthDescription",
    icon: <DollarIcon />,
  },
  {
    id: 6,
    title: "sixthTitle",
    description: "sixthDescription",
    icon: <TagIcon />,
  },
];

const FAQCards = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[135px] mb-[63px]">
      {data.map((item) => (
        <FAQCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FAQCards;
