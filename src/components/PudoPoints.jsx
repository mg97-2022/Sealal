import CustomCard from "./CustomCard";
import SectionHeader from "./SectionHeader";

const pudoPoints = [
  {
    id: 1,
    imgSrc: "/pudo-points1.png",
    step: "step1",
    title: "orderPlaced",
    description: "pudoPoints1",
    imgWidth: 294,
    imgHeight: 294,
  },
  {
    id: 2,
    imgSrc: "/pudo-points2.png",
    step: "step2",
    title: "orderDelivered",
    description: "pudoPoints2",
    imgWidth: 294,
    imgHeight: 294,
  },
  {
    id: 3,
    imgSrc: "/pudo-points3.png",
    step: "step3",
    title: "parcelCollected",
    description: "pudoPoints3",
    imgWidth: 294,
    imgHeight: 294,
  },
  {
    id: 4,
    imgSrc: "/pudo-points4.png",
    step: "step4",
    title: "commissionRewarded",
    description: "pudoPoints4",
    imgWidth: 294,
    imgHeight: 294,
  },
];

const PudoPoints = () => {
  return (
    <section className="container pt-10 pb-14">
      <SectionHeader heading="whatIsPudo" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pt-12">
        {pudoPoints.map((point) => (
          <CustomCard key={point.id} {...point} />
        ))}
      </div>
    </section>
  );
};

export default PudoPoints;
