import React from "react";
import "./Catogries.css";
import { categories_list } from "../data/Data";

const Categories = ({category, setCategory}) => {
  return (
    <div className="categories" id="categories">
      <h2>Shop by Category</h2>
      <p className="categories_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus
        repellat cumque perferendis, impedit dicta consequuntur aut ex aliquam
        eveniet
      </p>
      <div className="category-list">
        {categories_list.map((item,index) => (
          <div onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)}className="category-item" key={index}>
            <img className={category === item.name?"active":""}src={item.image} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Categories;
