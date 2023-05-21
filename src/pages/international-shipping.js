import InputField from "@/components/InputField";
import SelectInputField from "@/components/SelectInputField";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import Checkbox from "@/components/Checkbox";
import ContactUsBanner from "@/components/ContactUsBanner";
import InternationalShippingForm from "@/components/InternationalShippingForm";

const InternationalShipping = () => {
  return (
    <main>
      <ContactUsBanner />
      <InternationalShippingForm />
    </main>
  );
};

export default InternationalShipping;
