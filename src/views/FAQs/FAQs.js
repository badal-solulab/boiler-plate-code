import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Header from "../../components/Header/Header";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import "./faqs.css";
import "../Dashboard/dashboard.css";

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
    <div className="Dashboard_Body">
      <Header />
      <div className="container">
        <div className="accordion-wrapper" id="accordion">
          <div id="page_title" className="mb-40">
            <PageTitleSection showTitle="FAQ" />
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
      </div>
    </div>
  );
};

export default FAQs;
