import React, { useContext} from "react";
import "./Fooditem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faStar, faStarHalf, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { storeContext } from "../Context/Context";

const Fooditem = ({id,name, image, price, weight, description }) => {

  const {cartItems, addtocart,removefromcart,url} = useContext(storeContext);


  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={url+"/images/"+image} alt="" />
        {!cartItems[id] ? (
          <FontAwesomeIcon style={{fontSize:'25px', color:"white"}}
            className="add"
            onClick={() => addtocart(id)}
            icon={faSquarePlus}
          />
        ) : (
          <div className="food-item-counter">
            <FontAwesomeIcon style={{width:'35px', color:"red"}}
            onClick={() => removefromcart(id)}
            icon={faMinus}
          />
          <p>{cartItems[id]}</p>
          <FontAwesomeIcon
           style={{width:'35px', color:"green"}}
            onClick={() => addtocart(id)}
            icon={faPlus}
          />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
          </div>
        </div>
        <p className="food-item-desc" style={{ color: "black", wordBreak: "break-all" }}>{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
         </div>
  );
};

export default Fooditem;
