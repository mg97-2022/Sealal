import PudoPointsCard from "./PudoPointsCard";
import SectionHeader from "./SectionHeader";

const pudoPoints = [
  {
    id: 1,
    imgSrc: "/pudo-points1.png",
    step: "step1",
    title: "orderPlaced",
    description: "pudoPoints1",
  },
  {
    id: 2,
    imgSrc: "/pudo-points2.png",
    step: "step2",
    title: "orderDelivered",
    description: "pudoPoints2",
  },
  {
    id: 3,
    imgSrc: "/pudo-points3.png",
    step: "step3",
    title: "parcelCollected",
    description: "pudoPoints3",
  },
  {
    id: 4,
    imgSrc: "/pudo-points4.png",
    step: "step4",
    title: "commissionRewarded",
    description: "pudoPoints4",
  },
];

const PudoPoints = () => {
  return (
    <section className="container pt-10 pb-14">
      <SectionHeader heading="whatIsPudo" />
      <div className="flex items-center gap-4 pt-12">
        {pudoPoints.map((point) => (
          <PudoPointsCard key={point.id} {...point} />
        ))}
      </div>
    </section>
  );
};

export default PudoPoints;

// whatIsPudo: "WHAT IS A PUDO POINT?",
// step1: "step 1",
// orderPlaced: "order placed",
// pudoPoints1:

// PudoPointsCard
