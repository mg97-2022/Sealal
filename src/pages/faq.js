import FAQBanner from "@/components/FAQ/FAQBanner";
import FAQCards from "@/components/FAQ/FAQCards";
import FAQGetInTouch from "@/components/FAQ/FAQGetInTouch";
import FAQOtherQuestions from "@/components/FAQ/FAQOtherQuestions";

const FAQ = () => {
  return (
    <main>
      <FAQBanner />
      <FAQCards />
      <FAQOtherQuestions />
      <FAQGetInTouch />
    </main>
  );
};

export default FAQ;
