import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SectionHeading from "./ProfileInfo/SectionHeading";
import ProfilePageHeader from "./ProfilePageHeader";
import SquareFilledButton from "./SquareFilledButton";

const ProfileFinancialSettlement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <ProfilePageHeader heading="financialSettlement" />
      <div className="bg-[#F7F7F7] px-[18px] pt-[29px] pb-[45px]">
        <form
          className="flex items-end gap-2 mt-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <InputField
            register={register}
            name="amountsDue"
            label="amountsDue"
            errorMessage={errors.amountsDue?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
            labelClassName="text-black"
            placeholder="100$"
          />
          <InputField
            register={register}
            name="myBalance"
            label="myBalance"
            errorMessage={errors.myBalance?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
            labelClassName="text-black"
            placeholder="125$"
          />
          <SquareFilledButton type="submit" className="h-[60px] px-10">
            requestAmount
          </SquareFilledButton>
        </form>
      </div>
    </div>
  );
};

export default ProfileFinancialSettlement;
