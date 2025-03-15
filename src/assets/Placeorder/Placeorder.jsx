import React, { useContext, useEffect, useState, useNavigate } from 'react'
import './Placeorder.css'
import { storeContext } from '../Context/Context'
import axios from "axios";
const Placeorder = () => {

  const {getTotalcartvalue,token,grocery_list,url,cartItems} = useContext(storeContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  
  const placeOrder = async (event) =>{ 
    event.preventDefault()
    let orderItems = [];
    grocery_list.map((item) => {
        if(cartItems[item._id] > 0){
          let itemInfo = item;
          itemInfo["quantity"]= cartItems[item._id];
            orderItems.push(itemInfo);
        }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalcartvalue()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
      navigate("/cart");
    }
    else if(getTotalcartvalue()===0){
      navigate("/cart");
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input required  name="firstName" onChange={onChangeHandler} value={data.firstName}  type="text" placeholder='First Name'/>
          <input  required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input  required  name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter your mail Id'/>
        <input  required name="address" onChange={onChangeHandler} value={data.address}  type="text" placeholder='Street'/>
        <div className="multi-fields">
        <input  required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
          <input  required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
        <input  required name="zip" onChange={onChangeHandler} value={data.zip}  type="text" placeholder='Zip-code'/>
          <input  required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required  name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone Number' />
      </div>

      <div className="place-order-right">
                    <div className="cart-total">
                          <h2>Cart Total</h2>
                      <div>
                        <div className="cart-total-details">
                          <p>Sub Total</p>
                          <p>${getTotalcartvalue()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                          <p>Delivery Fee</p>
                          <p>${getTotalcartvalue()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                          <b>Total</b>
                          <b>${getTotalcartvalue()===0?0:getTotalcartvalue()+2}</b>
                        </div>
                      </div>
                        <button type="submit">Proceed to Pay</button>
                      </div>
      </div>
    </form>
  )
}

export default Placeorder