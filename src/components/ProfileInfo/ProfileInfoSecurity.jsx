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
      <SectionHeading heading="security" />
      <form
        className="flex items-end gap-2 mt-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <InputField
          register={register}
          name="email"
          label="email"
          type="email"
          errorMessage={errors.email?.message}
          inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          labelClassName="text-black"
          placeholder="exampel@exampel.com"
        />
        <InputField
          register={register}
          name="password"
          label="password"
          type="password"
          errorMessage={errors.password?.message}
          inputClassName="bg-white border-greyLightFifth h-[60px] pl-[18px]"
          labelClassName="text-black"
          placeholder="**********"
        />
        <SquareButton type="submit" className="h-[60px]">
          update
        </SquareButton>
      </form>
    </div>
  );
};

export default ProfileGeneralInfo;
