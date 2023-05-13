import SectionHeader from "./SectionHeader";
import ShippingCard from "./ShippingCard";
import ShippingCarIcon from "./icons/ShippingCarIcon";
import PlaneIcon from "./icons/PlaneIcon";
import { useState } from "react";

const HomePageShipping = () => {
  const [internalShippingCard, setInternalShippingCard] = useState(true);
  const [internationalShippingCard, setInternationalShippingCard] =
    useState(true);

  return (
    <section className="container pb-6">
      <SectionHeader heading="Find out about shipping rates" showSideLines />
      <div className="flex items-center justify-center gap-16 px-44">
        <ShippingCard
          icon={<ShippingCarIcon />}
          title={"internalShipping"}
          description={"internalShippingDescription"}
          onClick={() => setInternalShippingCard(false)}
        />
        <ShippingCard
          title={"internationalShipping"}
          description={"internationalShippingDescription"}
          onClick={() => setInternationalShippingCard(false)}
          icon={<PlaneIcon />}
        />
      </div>
    </section>
  );
};

export default HomePageShipping;
