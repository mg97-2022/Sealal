import LangUtils from "@/utils/language";
import InputField from "@/components/InputField";
import SelectInputField from "@/components/SelectInputField";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import ShippingPagesHeading from "./ShippingPagesHeading";
import { useForm } from "react-hook-form";
import CustomRadio from "./CustomRadio";
import DatePicker from "./DatePicker";
import { setDate } from "date-fns";
import { useState } from "react";

const GENDER_LIST = ["man", "female"];
const MEASURE_CLOTHES = ["available", "unavailable"];
const PAYMENT = ["cash", "done"];
const COST = ["buyer", "seller"];

const InternalShippingForm = () => {
  const [date, selectedDate] = useState("");

  const dateChangeHandler = (pickedDate) => setDate(selectedDate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    shippingType,
    shipmentType,
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
    <section className="pt-8 pb-16 mb-[100px] md:mb-[200px] lg:mb-[300px] bg-[#F9F9F9]">
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <ShippingPagesHeading heading="internalShipping" />
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
            name="shipmentType"
            label="shipmentType"
            errorMessage={shipmentType?.message}
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
        <span className="block text-primaryMedium first-letter:capitalize font-medium mt-6 mb-8">
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
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-5 mb-9 pb-8 border-b border-b-[#0000001A]">
          <div className="xl:border-r xl:border-r-greyDarkSecondary">
            <h5 className="block first-letter:capitalize text-primary font-medium mb-3">
              {LangUtils.FetchWord("deliveryGender")}
            </h5>
            <CustomRadio
              name="gender"
              defaultValue="man"
              register={register}
              radioInputsList={GENDER_LIST}
            />
          </div>
          <div className="xl:border-r xl:border-r-greyDarkSecondary">
            <h5 className="block first-letter:capitalize text-primary font-medium mb-3">
              {LangUtils.FetchWord("measureClothes")}
            </h5>
            <CustomRadio
              name="measureClothes"
              defaultValue="available"
              register={register}
              radioInputsList={MEASURE_CLOTHES}
            />
          </div>
          <div className="xl:border-r xl:border-r-greyDarkSecondary">
            <h5 className="block first-letter:capitalize text-primary font-medium mb-3">
              {LangUtils.FetchWord("payment")}
            </h5>
            <CustomRadio
              name="payment"
              defaultValue="cash"
              register={register}
              radioInputsList={PAYMENT}
            />
          </div>
          <div>
            <h5 className="block first-letter:capitalize text-primary font-medium mb-3">
              {LangUtils.FetchWord("cost")}
            </h5>
            <CustomRadio
              name="cost"
              defaultValue="buyer"
              register={register}
              radioInputsList={COST}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 sm:gap-3 mb-9">
          <div>
            <h5 className="block first-letter:capitalize text-primary font-medium mb-3">
              {LangUtils.FetchWord("timeToDelivery")}
            </h5>
            <div>
              <h5 className="block first-letter:capitalize font-medium mb-3">
                {LangUtils.FetchWord("hour")}
              </h5>
              <div className="grid grid-cols-2 gap-2">
                <InputField
                  register={register}
                  name="hourFrom"
                  label="from"
                  placeholder="9am"
                  errorMessage={otherPhone?.message}
                />
                <InputField
                  register={register}
                  name="hourTo"
                  label="to"
                  placeholder="5pm"
                  errorMessage={otherPhone?.message}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <DatePicker onChangeDate={dateChangeHandler} />
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
        </div>
      </form>
    </section>
  );
};

export default InternalShippingForm;
