import React, { useState } from "react";
import "./Accordion.css"; // This is for styling

const faqData = [
  {
    title: "What is your return policy?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "How do I track my order?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Can I purchase items again?",
    body: "Yes, you can purchase items again from your order history or by searching the product.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Collapse
    } else {
      setOpenIndex(index); // Expand
    }
  };

  return (
    <div className="accordion-container">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-body">{item.body}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
