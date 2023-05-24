import PudoBenefitsCard from "./PudoBenefitsCard";
import SectionHeader from "./SectionHeader";

const benefits = [
  {
    id: 1,
    imgSrc: "/pudo-benefits1.png",
    title: "additionalTraffic",
    description: "pudoBenefits1",
    imgWidth: 355,
    imgHeight: 225,
  },
  {
    id: 2,
    imgSrc: "/pudo-benefits2.png",
    title: "additionalRevenue",
    description: "pudoBenefits2",
    imgWidth: 198,
    imgHeight: 217,
  },
];

const PudoBenefits = () => {
  return (
    <section className="container pb-28 pt-12">
      <SectionHeader heading="pudoBenefits" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {benefits.map((benefit) => (
          <PudoBenefitsCard key={benefit.id} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default PudoBenefits;
