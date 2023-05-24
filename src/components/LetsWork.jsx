import CustomCard from "./CustomCard";
import SectionHeader from "./SectionHeader";

const letsWork = [
  {
    id: 1,
    imgSrc: "/pudo-points2.png",
    title: "lastMile",
    description: "workTogetherCartDesc1",
    imgWidth: 340,
    imgHeight: 340,
  },
  {
    id: 2,
    imgSrc: "/services2.png",
    title: "internationalDelivery",
    description: "workTogetherCartDesc2",
    imgWidth: 340,
    imgHeight: 340,
  },
  {
    id: 3,
    imgSrc: "/services3.png",
    title: "fulfill",
    description: "workTogetherCartDesc3",
    imgWidth: 340,
    imgHeight: 340,
  },
];

const LetsWork = () => {
  return (
    <section className="container pt-10 pb-14">
      <SectionHeader heading="workTogether" description="modularYet" />
      <div className="flex flex-wrap gap-y-24 gap-x-8 pt-12">
        {letsWork.map((card) => (
          <CustomCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default LetsWork;
