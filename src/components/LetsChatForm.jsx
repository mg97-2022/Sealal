import { useForm } from "react-hook-form";
import SectionHeader from "./SectionHeader";
import InputField from "./InputField";
import Button from "./Button";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

const LetsChatForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (values) => {
    console.log(values);
  };

  console.log(errors);

  return (
    <section className="pt-16 pb-10 bg-greyLightThird mb-32">
      <SectionHeader
        headingClassName="uppercase"
        heading="letsChat"
        description="whoDoYouNeed"
      />
      <form
        className="container mt-[70px]"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="grid grid-cols-2 gap-8 mb-8">
          <InputField
            register={register}
            name="messagePurpose"
            label="messagePurpose"
            errorMessage={errors.messagePurpose?.message}
            inputClassName="bg-white border-greyLightFifth"
          />
          <InputField
            register={register}
            name="firstName"
            label="firstName"
            errorMessage={errors.firstName?.message}
            inputClassName="bg-white border-greyLightFifth"
          />
          <InputField
            register={register}
            type="phone"
            name="contactNumber"
            label="contactNumber"
            errorMessage={errors.contactNumber?.message}
            inputClassName="bg-white border-greyLightFifth"
          />
          <InputField
            register={register}
            type="email"
            name="email"
            label="email"
            errorMessage={errors.email?.message}
            inputClassName="bg-white border-greyLightFifth"
            otherValidations={{
              pattern: "^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$",
            }}
          />
        </div>
        <InputField
          register={register}
          name="title"
          label="title"
          errorMessage={errors.title?.message}
          inputClassName="bg-white border-greyLightFifth mb-8"
        />
        <div className="mb-16">
          <TextArea
            register={register}
            name="description"
            label="description"
            errorMessage={errors.description?.message}
            containerClassName="mb-3"
          />
          <Checkbox
            register={register}
            name="agreeToCommunicate"
            label="iAgreeToReceive"
          />
          <div className="mt-6 pl-10">
            {["youCanUnsubscribe", "byClicking"].map((paragraph, index) => (
              <p
                className={`text-greySemiDark first-letter-capitalize ${
                  index === 0 && "mb-5"
                }`}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
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
    </section>
  );
};

export default LetsChatForm;
