import Button from "./Button";
import HomeFormInputsContainer from "./HomeFormInputsContainer";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import SelectInputField from "./SelectInputField";
import LangUtils from "@/utils/language";
import CustomRadio from "./CustomRadio";
import DatePicker from "./DatePicker";

const GENDER_LIST = ["man", "female"];
const MEASURE_CLOTHES = ["available", "unavailable"];
const PAYMENT = ["cash", "done"];
const COST = ["buyer", "seller"];

const HomeInternalShipping = () => {
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
    city,
    region,
    street,
    receiverName,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <HomeFormInputsContainer className="grid-cols-2">
        <SelectInputField
          register={register}
          name="shippingType"
          label="shippingType"
          errorMessage={shippingType?.message}
        ></SelectInputField>
        <SelectInputField
          register={register}
          name="shipmentType"
          label="shipmentType"
          errorMessage={shipmentType?.message}
        ></SelectInputField>
      </HomeFormInputsContainer>
      <HomeFormInputsContainer className="grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <InputField
          register={register}
          type="number"
          name="tall"
          label="tall"
          errorMessage={tall?.message}
        />
        <InputField
          register={register}
          type="number"
          name="width"
          label="width"
          errorMessage={width?.message}
        />
        <InputField
          register={register}
          type="number"
          name="height"
          label="height"
          errorMessage={height?.message}
        />
        <InputField
          register={register}
          type="number"
          name="weight"
          label="weight"
          errorMessage={weight?.message}
        />
        <InputField
          register={register}
          type="number"
          name="number"
          label="number"
          errorMessage={number?.message}
        />
      </HomeFormInputsContainer>
      <HomeFormInputsContainer className="border-none pt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SelectInputField
          register={register}
          name="city"
          label="city"
          errorMessage={city?.message}
        ></SelectInputField>
        <InputField
          register={register}
          name="region"
          label="region"
          errorMessage={region?.message}
        />
        <InputField
          register={register}
          name="street"
          label="street"
          errorMessage={street?.message}
        />
        <InputField
          register={register}
          name="receiverName"
          label="receiverName"
          errorMessage={receiverName?.message}
        />
      </HomeFormInputsContainer>
      <HomeFormInputsContainer className="pt-0">
        <InputField
          register={register}
          name="specialMarque"
          label="specialMarque"
          errorMessage={specialMarque?.message}
        />
      </HomeFormInputsContainer>
      <h5 className="block first-letter:capitalize font-medium mt-3 pl-[14px]">
        {LangUtils.FetchWord("receiverInfo")}
      </h5>
      <HomeFormInputsContainer className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <InputField
          register={register}
          name="name"
          label="name"
          errorMessage={name?.message}
        />
        <InputField
          register={register}
          name="title"
          label="title"
          errorMessage={title?.message}
        />
        <InputField
          register={register}
          name="phone"
          label="phone"
          errorMessage={phone?.message}
        />
        <InputField
          register={register}
          name="otherPhone"
          label="otherPhone"
          errorMessage={otherPhone?.message}
        />
      </HomeFormInputsContainer>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-0 py-5 px-[14px] border-b border-b-greyDarkSecondary">
        <div className="xl:border-r xl:border-r-greyDarkSecondary w-[230px]">
          <h5 className="block first-letter:capitalize font-medium mb-3">
            {LangUtils.FetchWord("deliveryGender")}
          </h5>
          <CustomRadio
            name="gender"
            defaultValue="man"
            register={register}
            radioInputsList={GENDER_LIST}
          />
        </div>
        <div>
          <h5 className="block first-letter:capitalize font-medium mb-3">
            {LangUtils.FetchWord("measureClothes")}
          </h5>
          <CustomRadio
            name="measureClothes"
            defaultValue="available"
            register={register}
            radioInputsList={MEASURE_CLOTHES}
          />
        </div>
      </div>
      <div className="flex flex-wrap pt-5 px-[14px]">
        <h5 className="block first-letter:capitalize font-medium mb-3">
          {LangUtils.FetchWord("timeToDelivery")}
        </h5>
        <div className="flex sm:flex-nowrap md:flex-wrap lg:flex-nowrap gap-5 md:gap-0 lg:gap-[34px]">
          <div className="w-full">
            <h5 className="block first-letter:capitalize font-medium mb-3">
              {LangUtils.FetchWord("date")}
            </h5>
            <div className="flex justify-center">
              <DatePicker />
            </div>
          </div>
          <div className="flex flex-col w-full min-w-[180px] gap-4">
            <div className="pb-[30px] w-full border-b border-b-greyDarkSecondary">
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
            <div className="mt-4">
              <div className="mb-5">
                <h5 className="block first-letter:capitalize font-medium mb-3">
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
                <h5 className="block first-letter:capitalize font-medium mb-3">
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
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          type="submit"
          button="submit"
          buttonColor="bg-secondary"
          className="px-24 py-1"
        />
      </div>
    </form>
  );
};

export default HomeInternalShipping;
