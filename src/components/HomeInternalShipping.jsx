import Button from "./Button";
import HomeFormInputsContainer from "./HomeFormInputsContainer";
import HomeShippingForm from "./HomeShippingForms";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import SelectInputField from "./SelectInputField";

const HomeInternalShipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HomeFormInputsContainer>
        <SelectInputField
          register={register}
          name="shippingType"
          label="shipping type"
          errorMessage={errors.shippingType?.message}
        ></SelectInputField>
        <SelectInputField
          register={register}
          name="shipmentType"
          label="shipment type"
          errorMessage={errors.country?.message}
        ></SelectInputField>
      </HomeFormInputsContainer>
      <HomeFormInputsContainer>
        <InputField
          register={register}
          type="number"
          name="tall"
          label="tall"
          errorMessage={errors.tall?.message}
        />
        <InputField
          register={register}
          type="number"
          name="width"
          label="width"
          errorMessage={errors.width?.message}
        />
        <InputField
          register={register}
          type="number"
          name="height"
          label="height"
          errorMessage={errors.height?.message}
        />
        <InputField
          register={register}
          type="number"
          name="weight"
          label="weight"
          errorMessage={errors.weight?.message}
        />
        <InputField
          register={register}
          type="number"
          name="number"
          label="number"
          errorMessage={errors.number?.message}
        />
      </HomeFormInputsContainer>
      <HomeFormInputsContainer className="border-none pt-2">
        <SelectInputField
          register={register}
          name="city"
          label="city"
          errorMessage={errors.city?.message}
        ></SelectInputField>
        <InputField
          register={register}
          name="region"
          label="region"
          errorMessage={errors.region?.message}
        />
        <InputField
          register={register}
          name="street"
          label="street"
          errorMessage={errors.street?.message}
        />
        <InputField
          register={register}
          name="receiverName"
          label="receiver name"
          errorMessage={errors.receiverName?.message}
        />
      </HomeFormInputsContainer>
      <HomeFormInputsContainer className="pt-0">
        <InputField
          register={register}
          name="specialMarque"
          label="special marque"
          errorMessage={errors.specialMarque?.message}
        />
      </HomeFormInputsContainer>
      <span className="block first-letter:capitalize font-medium mt-3 pl-[14px]">
        receiver info
      </span>
      <HomeFormInputsContainer>
        <InputField
          register={register}
          name="name"
          label="name"
          errorMessage={errors.name?.message}
        />
        <InputField
          register={register}
          name="title"
          label="title"
          errorMessage={errors.title?.message}
        />
        <InputField
          register={register}
          name="phone"
          label="phone"
          errorMessage={errors.phone?.message}
        />
        <InputField
          register={register}
          name="otherPhone"
          label="other phone"
          errorMessage={errors.otherPhone?.message}
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
