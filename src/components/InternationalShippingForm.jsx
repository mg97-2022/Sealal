import LangUtils from "@/utils/language";
import InputField from "@/components/InputField";
import SelectInputField from "@/components/SelectInputField";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import ShippingPagesHeading from "./ShippingPagesHeading";
import { useForm } from "react-hook-form";

const InternationalShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    shippingType,
    country,
    tall,
    width,
    height,
    weight,
    number,
    specialMarque,
    name,
    title,
    phone,
    otherPhone,
  } = errors || {};

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="pt-8 pb-16 mb-[500px] bg-[#F9F9F9]">
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <ShippingPagesHeading heading="internationalShipping" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
          <SelectInputField
            register={register}
            name="shippingType"
            label="shippingType"
            errorMessage={shippingType?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          ></SelectInputField>
          <SelectInputField
            register={register}
            name="country"
            label="country"
            errorMessage={country?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          ></SelectInputField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-9">
          <InputField
            register={register}
            type="number"
            name="tall"
            label="tall"
            errorMessage={tall?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
          <InputField
            register={register}
            type="number"
            name="width"
            label="width"
            errorMessage={width?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
          <InputField
            register={register}
            type="number"
            name="height"
            label="height"
            errorMessage={height?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
          <InputField
            register={register}
            type="number"
            name="weight"
            label="weight"
            errorMessage={weight?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
          <InputField
            register={register}
            type="number"
            name="number"
            label="number"
            errorMessage={number?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
        </div>
        <div className="border-b border-b-[#0000001A] pb-12">
          <InputField
            register={register}
            name="specialMarque"
            label="specialMarque"
            errorMessage={specialMarque?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
        </div>
        <span className="block text-primaryVeryLight first-letter:capitalize font-medium mt-6 mb-8">
          {LangUtils.FetchWord("receiverInfo")}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-9 border-b border-b-[#0000001A] pb-12">
          <InputField
            register={register}
            name="name"
            label="name"
            errorMessage={name?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
          <InputField
            register={register}
            name="title"
            label="title"
            errorMessage={title?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
          <InputField
            register={register}
            name="phone"
            label="phone"
            errorMessage={phone?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
          <InputField
            register={register}
            name="otherPhone"
            label="otherPhone"
            errorMessage={otherPhone?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mt-5">
          <Checkbox
            register={register}
            name="saveInformation"
            label="saveInformation"
          />
          <Button
            type="submit"
            button="submit"
            buttonColor="bg-secondary"
            className="px-24 py-1 w-[255px]"
          />
        </div>
      </form>
    </section>
  );
};

export default InternationalShippingForm;
