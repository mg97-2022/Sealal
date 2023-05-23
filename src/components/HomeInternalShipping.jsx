import Button from "./Button";
import HomeFormInputsContainer from "./HomeFormInputsContainer";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import SelectInputField from "./SelectInputField";
import LangUtils from "@/utils/language";

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
      </HomeFormInputsContainer >
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
      <span className="block first-letter:capitalize font-medium mt-3 pl-[14px]">
        {LangUtils.FetchWord("receiverInfo")}
      </span>
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
      <HomeFormInputsContainer>
        <div>delivery gender</div>
        <div>measure clothes</div>
      </HomeFormInputsContainer>
      <HomeFormInputsContainer>
        <div>date</div>
        <div>hour</div>
      </HomeFormInputsContainer>
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
