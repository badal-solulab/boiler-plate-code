import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import "./faqs.css";

const items = [
  {
    id: 1,
    question: "How much will the Grand Cru Mint Pass Cost?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 2,
    question: "How much will the Grand Cru Mint Pass Cost?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 3,
    question: "How much will the Grand Cru Mint Pass Cost?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 4,
    question: "How much will the Grand Cru Mint Pass Cost?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 5,
    question: "How much will the Grand Cru Mint Pass Cost?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];

const FAQs = () => {
  const [open, setOpen] = useState(false);
  const onOpen = (data) => {
    setOpen(data);
  };
  return (
    <div className="accordion-wrapper" id="accordion">
      <div className="d-flex justify-content-between align-items-center">
        <p className="faq-title">FAQ</p>
        <Link to="/faqs" className="faq-link">View all</Link>
      </div>

      {items.map((item) => {
        return (
          <Collapsible
            trigger={item.question}
            onTriggerOpening={() => onOpen(item.id)}
            open={item.id === open}
          >
            <p>{item.answer}</p>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default FAQs;
