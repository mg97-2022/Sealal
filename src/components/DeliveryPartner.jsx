import CustomCarousel from "./CustomCarousel";
import LeftHeading from "./LeftHeading";
import Image from "next/image";

// import img1 from "/image 1.png";
// import img2 from "/image 2.png";
// import img3 from "/image 3.png";
// import img4 from "/image 4.png";
// import img5 from "/image 5.png";
// import img6 from "/image 6.png";

const DeliveryPartner = () => {
  return (
    <section className="container py-8">
      <LeftHeading heading="deliveryPartner" />
      <CustomCarousel slidesToShow={11}>
        {[
          "/image 1.png",
          "/image 3.png",
          "/image 4.png",
          "/image 7.png",
          "/image 8.png",
          "/image 9.png",
          "/image 10.png",
          "/image 10.png",
        ].map((img, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={img} alt="img" width="80" height="80" />
          </div>
        ))}
      </CustomCarousel>
    </section>
  );
};

export default DeliveryPartner;
