import React, { useContext } from "react";
import { storeContext } from "../Context/Context";
import Fooditem from "./Fooditem";
import "./Food.css";

const Food = ({category}) => {
  const { grocery_list } = useContext(storeContext);
  return (
    <div className="food-disp" id="food-disp">
      <h2>Our Best Selling Products</h2>
      <div className="food-disp-list">
        {grocery_list.map((item ,index) => {
          if (category === "All" || category === item.category) {
            return (
            <Fooditem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              weight={item.weight}
            />
          ); 
          } 
        })}
      </div>
    </div>
  );
};

export default Food;
