import { useForm } from "react-hook-form";
import InputField from "../InputField";
import SquareButton from "../SquareButton";
import SectionHeading from "./SectionHeading";

const ProfileGeneralInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="bg-[#F7F7F7] px-[18px] pt-[29px] pb-[45px]">
      <SectionHeading heading="generalInfo" />
      <form
        className="flex flex-col lg:flex-row items-end gap-5 lg:gap-2 mt-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex w-full gap-2">
          <InputField
            register={register}
            name="firstName"
            label="firstName"
            errorMessage={errors.firstName?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
            labelClassName="text-black"
          />
          <InputField
            register={register}
            name="lastName"
            label="lastName"
            errorMessage={errors.lastName?.message}
            inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
            labelClassName="text-black"
          />
        </div>
        <SquareButton type="submit" className="h-[60px]">
          update
        </SquareButton>
      </form>
    </div>
  );
};

export default ProfileGeneralInfo;
