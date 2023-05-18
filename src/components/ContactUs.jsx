import ContactCard from "./ContactCard";
import BigLocationIcon from "./icons/BigLocationIcon";
import PhoneIcon from "./icons/PhoneIcon";
import SmsIcon from "./icons/SmsIcon";

const contactUs = [
  {
    id: 1,
    icon: <BigLocationIcon />,
    title: "address",
    description: "lorem",
  },
  {
    id: 2,
    icon: <PhoneIcon />,
    title: "phoneNumber",
    description: "lorem",
  },
  {
    id: 3,
    icon: <SmsIcon />,
    title: "emailAddress",
    description: "lorem",
  },
];

const ContactUs = () => {
  return (
    <section className="py-[86px] flex items-center justify-center gap-[60px]">
      {contactUs.map((card) => (
        <ContactCard key={card.id} {...card} />
      ))}
    </section>
  );
};

export default ContactUs;
