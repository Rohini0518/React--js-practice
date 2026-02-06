import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "What are the delivery hours?",
      answer: "We deliver from 7 AM to 11 PM every day including weekends.",
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be canceled within 2 minutes after placing them.",
    },
    {
      question: "Is cash on delivery available?",
      answer: "Yes, COD is available in selected locations.",
    },
    {
      question: "Do you deliver outside the city?",
      answer: "Currently we deliver only within city limits.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  function handleFaq(index) {
    console.log("index--",index,"open--",openIndex)
    setOpenIndex((prevI)=>prevI==index?null:index);
  }
  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <div
        style={{
          backgroundColor: "whitesmoke",
          border: "1px solid white",
          padding: "20px",
          width: "40%",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid gray",
              padding: "20px",
              margin: "10px",
            }}
            key={index}
          >
            <div style={{ fontSize: 26 }} onClick={()=>handleFaq(index)}>
              {faq.question}
              <span style={{ gap: 4, marginLeft: "40px" }}>{openIndex==index?"^":"🔻"}</span>
            </div>
            {openIndex==index && (
              <p style={{ fontSize: 18, margin: "10px" }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
