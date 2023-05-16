import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ShippingCard from "./ShippingCard";
import HomeFormContainer from "./HomeFormContainer";
import HomeInternalShipping from "./HomeInternalShipping";
import HomeInternationalShipping from "./HomeInternationalShipping";
import ShippingCarIcon from "./icons/ShippingCarIcon";
import PlaneIcon from "./icons/PlaneIcon";

const HomePageShipping = () => {
  const [showInternalShippingForm, setShowInternalShippingForm] =
    useState(false);
  const [showInternationalShippingForm, setShowInternationalShippingForm] =
    useState(false);

  return (
    <section className="container pb-6">
      <SectionHeader heading="shippingRates" showSideLines />
      <div
        className={`flex items-start flex-col md:flex-row justify-center ${
          (showInternalShippingForm || showInternationalShippingForm) && "pt-24"
        } ${
          showInternalShippingForm && showInternationalShippingForm
            ? "gap-5"
            : "gap-16"
        }`}
      >
        <div className={"flex-1 w-full mb-16 md:mb-0 self-stretch"}>
          {showInternalShippingForm ? (
            <HomeFormContainer
              title="internal shipping"
              icon={<ShippingCarIcon />}
            >
              <HomeInternalShipping />
            </HomeFormContainer>
          ) : (
            <ShippingCard
              icon={<ShippingCarIcon />}
              title={"internalShipping"}
              description={"internalShippingDescription"}
              onClick={() => setShowInternalShippingForm(true)}
              className="ml-44"
            />
          )}
        </div>
        <div className="flex-1 w-full self-stretch">
          {showInternationalShippingForm ? (
            <HomeFormContainer
              title="international shipping"
              icon={<PlaneIcon />}
            >
              <HomeInternationalShipping />
            </HomeFormContainer>
          ) : (
            <ShippingCard
              title={"internationalShipping"}
              description={"internationalShippingDescription"}
              onClick={() => setShowInternationalShippingForm(true)}
              icon={<PlaneIcon />}
              className="mr-44"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePageShipping;
