import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SectionHeading from "./ProfileInfo/SectionHeading";
import ProfilePageHeader from "./ProfilePageHeader";
import SquareButton from "./SquareButton";

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
      <div className="bg-[#F7F7F7] px-[18px] pt-[15px] pb-[35px]">
        <form
          className="flex flex-col lg:flex-row items-end gap-5 lg:gap-2 mt-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex w-full gap-2">
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
          </div>
          <SquareButton type="submit" className="h-[60px]">
            requestAmount
          </SquareButton>
        </form>
      </div>
    </div>
  );
};

export default ProfileFinancialSettlement;
