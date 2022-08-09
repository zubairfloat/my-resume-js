import React from "react";
import Pricebox from "../Items/Pricebox";

const allPricebox = [
  {
    id: 1,
    name: "Basic",
    price: "12",
    icon: "icon-energy",
    content: ["Frontend React", "Customized Components", "Create New Modules"],
    recommended: false,
  },
  {
    id: 2,
    name: "Professional",
    price: "25",
    icon: "icon-fire",
    content: ["MERN Stack", "Advance React", "Type Script", "Full Stack"],
    recommended: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "42",
    icon: "icon-rocket",
    content: ["Full Stack", "Dynamics 365 Store Front", "Functional"],
    recommended: false,
  },
];

function PricingTable() {
  return (
    <div className="row">
      {allPricebox.map((pricebox) => (
        <div
          className={
            pricebox.recommended
              ? "col-md-4 px-md-0 my-5 my-md-0"
              : "col-md-4 mt-3"
          }
          key={pricebox.id}
        >
          <Pricebox pricebox={pricebox} />
        </div>
      ))}
    </div>
  );
}

export default PricingTable;
