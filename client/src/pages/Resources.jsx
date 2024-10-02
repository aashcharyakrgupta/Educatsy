import React from "react"
import { useState } from "react";

function Resources() {
  const itemContent = [
    {
      components: "</Card>"
    },
    {
      components: 'Nothing is found here'
    },
    {
      components: 'Nothing is found here'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [post, setPost] = useState([]);

  const filterElements = (item) => {
    const filteredComponent = itemContent.find((content) => content.components === item);
    if (filteredComponent) {
      setPost([filteredComponent]);
    } else {
      setPost([]);
    }
  };

  return (
    <>
      <div className="resources d-flex flex-col ">
        {["Source Codes", "Guidelines", "Blogs"].map((item, index) => (
          <ul
            key={index}
            onClick={() => { setActiveIndex(index); filterElements(item) }}
            className={` ${index === activeIndex ? "bg-primary text-white p-2 cursor-pointer rounded-3" : ""}`}
          >
            <li className="cursor-pointer">{item}</li>
          </ul>
        ))}
      </div>
      <Card/>
    </>
  );
}

export default Resources;
