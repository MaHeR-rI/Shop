import classes from "./Faqs.module.css";
import FaqItem from "../../ui/FaqItem";
const Faqs = () => {


    const faqData = [
        {
          question: "What materials are the clothes made of?",
          answer: "Our clothing is made from high-quality materials such as cotton, polyester, and blends designed for durability and comfort.",
        },
        {
          question: "How do I find my size?",
          answer: "We recommend using our size chart available on the product page. Measure your chest, waist, and hips for the best fit.",
        },
        {
          question: "Are the clothes machine washable?",
          answer: "Yes, most of our clothes are machine washable. Please refer to the care label on each garment for specific instructions.",
        },
        {
          question: "What is your return policy for clothing?",
          answer: "We offer a 30-day return policy for all unworn and unwashed items. Please ensure the tags are still attached.",
        },
        {
          question: "Do you offer customization or tailoring?",
          answer: "Currently, we do not offer customization or tailoring services. However, many of our products are designed to be easily tailored.",
        },
        {
          question: "Where are your clothes manufactured?",
          answer: "Our clothes are ethically manufactured in facilities across Europe and Asia, ensuring fair labor practices.",
        },
      ];
      

  return (
    <>
      <h3 className={classes.title}>FAQs</h3>
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </>
  );
};

export default Faqs;
